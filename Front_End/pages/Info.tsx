import { NextPage } from "next";
import axios from 'axios';
import { useState, useEffect } from 'react';
import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import { SignUpTop } from "@/styles/SignUpStyle";
import { TodAll, TodImage, TodLabel, TodSignUp, TodInfo, SignUpLabel, InfoLabel, BottomButton } from "@/styles/SignUpStyle";
import {InfoMain,
    InfoSignUpBox,
    InfoInfoBox,
    OneExceptContainer,
    ProfileBox,
    ProfileLabel,
    ProfileInput,
    ProfileUploadButton,
    ProfileUploadLabel,
    ProfileGray,
    JobBox,
    JobLabel,
    JobSelect,
    BigSmallBox,
    BigLabel,
    BigSelect,
    SmallLabel,
    SmallSelect,
    InfoPhoneBox,
    InfoPhoneLabel,
    InfoPhoneInput,
    OneBox,
    OneLabel,
    OneInput,
    OneUploadButton,
    OneUploadLabel,
    OneGray,
    InfoRegiButton,
    InfoRegiLabel} from "@/styles/InfoStyle";

const InfoPage: NextPage = () => {
    const [file, setFile] = useState<File | null>(null);
    const [previewURL, setPreviewURL] = useState('');
    const [preview,setPreview] = useState<React.ReactNode | null>(null);
    const fileRef= useRef<HTMLInputElement | null>(null);
    const [job, setJob] = useState('');
    const [majorField, setMajorField] = useState<string | undefined>('');
    const [minorField, setMinorField] = useState<string | undefined>('');
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [inputFile, setInputFile] = useState<{ file: File | null; thumbnail: string; type: string }>({
        file: null,
        thumbnail: '',
        type: '',
      });
    const handleClickFileInput = () => {
        fileInputRef.current?.click();
    }

    //드롭아웃 선택 항목을 위한 state
    const [selectedJob, setSelectedJob] = useState<string>('');
    const [selectedMajorField, setSelectedMajorField] = useState<string>('');
    const [selectedMinorField, setSelectedMinorField] = useState<string>('');
    
    const router = useRouter();
    //SignUp에서 필요한 데이터들을 추출
    const { id, name, phone, email, password} = router.query;
    


    useEffect(() => {
      if (file && file.name !=='') {
        setPreview(<img className='img_preview' src={previewURL} />);
      }
    }, [file, previewURL]);

    const handleFileOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
      
        // 파일이 선택되었는지 확인
        if (event.target.files && event.target.files.length > 0) {
          let file = event.target.files[0];
          let reader = new FileReader();
      
          reader.onloadend = (e) => {
            setFile(file);
            setPreviewURL(reader.result as string);
          };
      
          reader.readAsDataURL(file);
        }
      };
      
      const handleFileButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        fileRef.current?.click(); // Optional chaining을 사용하여 null 체크
      };

      const handleJobChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setJob(e.target.value);
      };
    
      const handleMajorFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMajorField(e.target.value);
      };
    
      const handleMinorFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMinorField(e.target.value);
      };

      const uploadProfile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fileList = e.target.files;
        
        if (fileList && fileList[0]) {
          const url = URL.createObjectURL(fileList[0]);
      
          setInputFile({
            file: fileList[0],
            thumbnail: url,
            type: fileList[0].type.slice(0, 5),
          });
        }
      };

      const jobOptions = ['개발자', '기획자', '디자이너'];
      const majorFields: {[key: string]: string[] } = {
        '개발자': ['웹프론트엔드', '웹 백엔드', '게임'],
        '기획자': ['기획'],
        '디자이너': ['디자인'],
    };
    const minorFields: { [key: string]: string[] } = {
      '웹프론트엔드': ['React', 'Vue.js', 'Angular', 'Javascript', 'Typescript'],
      '웹 백엔드': ['SpringBoot', 'Spring', 'RubyOnRails', 'flask', 'django', 'java11', 'java8', 'python'],
      '게임': ['unity', 'gamemaker', 'Unreal Engine', 'cocos', 'directX', 'C#', 'C++'],
      '기획': ['기획'],
      '디자인': ['디자인'],
  };

  const handleRegistration = async () => {
    window.location.href = '/';
    try {
      axios.post('http://localhost:4000/sign/signup',{
        userId:id,
        userPw:password,
        userName:name,
        userPhone:phone,
        userEmail:email,
        userMajor:selectedJob,
        userFieldOfStudy:selectedMajorField,
        userTechStack:selectedMinorField,
        userLicense:0
      }).then(response => {
        // 로그인 성공 처리
        alert("회원가입에 성공했습니다.");
      })
      .catch(error => {
        alert("회원가입 실패");
      });
    } catch (error) {
      console.error('Registration failed:', error);
    } 
  };

    return(
     <TodAll>
        <TodImage/>
        <TodLabel>Tod</TodLabel>
        <SignUpTop>
        <InfoSignUpBox>
            <SignUpLabel>회원가입</SignUpLabel>
        </InfoSignUpBox>
        <InfoInfoBox>
            <InfoLabel>상세정보 입력</InfoLabel>
        </InfoInfoBox>
        </SignUpTop>
        <InfoMain>
            <OneExceptContainer>
                <ProfileBox>
                    <ProfileLabel>프로필 사진*</ProfileLabel>
                    <ProfileInput ref = {fileRef} id = "file" type = 'file' accept="images/jpg, images/jpeg, images/png" 
                    onChange={handleFileOnChange}></ProfileInput>
                </ProfileBox>
                <ProfileUploadButton onClick={handleFileButtonClick}>
                        <ProfileUploadLabel>업로드</ProfileUploadLabel>
                    </ProfileUploadButton>
                    <ProfileGray>*자신을 표현할 수 있는 사진을 업로드해주세요.</ProfileGray>
                    <JobBox>
                        <JobLabel>직군*</JobLabel>
                        <JobSelect value={selectedJob} onChange={(e) => setSelectedJob(e.target.value)}>
                            <option value="" disabled>직군 선택</option>
                            {jobOptions.map((option) => (
                              <option key={option} value={option}>{option}</option>
                            ))}
                          </JobSelect>
                    </JobBox>
                    <BigSmallBox>
                        <BigLabel>대분야*</BigLabel>
                        <BigSelect value={selectedMajorField} onChange={(e) => setSelectedMajorField(e.target.value)}>
                            <option value="" disabled>대분야 선택</option>
                            {((majorFields[selectedJob] as any) || []).map((option: string) => (
                              <option key={option} value={option}>{option}</option>
                            ))}
                          </BigSelect>

                        <SmallLabel>소분야*</SmallLabel>
                        <SmallSelect value={selectedMinorField} onChange={(e) => setSelectedMinorField(e.target.value)}>
                            <option value="" disabled>소분야 선택</option>
                            {minorFields[selectedMajorField]?.map((option) => (
                              <option key={option} value={option}>{option}</option>
                            ))}
                          </SmallSelect>
                    </BigSmallBox>
            </OneExceptContainer>
            <OneBox>
                <OneLabel>One이력서</OneLabel>
                <OneInput type="file" accept=".pdf, .jpeg, .jpg, .png"
                ref={fileInputRef} onChange={uploadProfile}></OneInput>
            </OneBox>
            <OneUploadButton onClick={handleClickFileInput}>
                <OneUploadLabel>업로드</OneUploadLabel>
            </OneUploadButton>
            <OneGray>
                *한 페이지로 정리된 이력서를 업로드해주세요.
                *PDF,JPEG,JPG,PNG만 업로드 가능합니다.
            </OneGray>
            <InfoRegiButton onClick={handleRegistration}>
                <InfoRegiLabel>등록</InfoRegiLabel>
            </InfoRegiButton>
        </InfoMain>
        <BottomButton>이용약관 | 개인정보 처리방침</BottomButton>
     </TodAll>
     
    );
};
export default InfoPage;