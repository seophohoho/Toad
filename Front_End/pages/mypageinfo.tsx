import { NextPage } from "next";
import { useState, useEffect } from 'react';
import axios from 'axios';
import {  MyPageAll,
    MyPageTop,
    MyPageList,
    MPImage,
    MPToadLabel,
    LicenseLabel,
    PublicProfileLabel,
    MPMyPageLabel,
    MPProfileButton,
    MPProfileLabel,
    BookmarkLabel,
    EditProfileLabel,
    ProfileQuit,
    MPProfileBox,
    MPInfoBox,
    MPInfoLabel,
    MPInfoLine,
    MPInfoIdBox,
    MPInfoIdLabel,
    MPInfoIdInput,
    MPInfoNameBox,
    MPInfoNameLabel,
    MPInfoNameInput,
    MPInfoPhoneBox,
    MPInfoPhoneLabel,
    MPInfoPhoneInput,
    MPInfoEmailBox,
    MPInfoEmailLabel,
    MPInfoEmailInput,
    MPEditButton,
    MPEditLabel,
    MPPasswordEditBox,
    MPPasswordEditBox2,
    MPPasswordEditInput,
    MPPasswordNowBox,
    MPPasswordEditLabel,
    MPPasswordNowLabel,
    ChangeButton,
    MPTable,
    MPTableHeader,
    MPTableRow,
    MPTableData,
    MPEvaluateBox,
    SuccessButton,
    FailureButton,
    InvisibleButton
}
    from  '@/styles/MyPageStyle'

    const MyPageInfo: NextPage = () => {

        const [id, setId] = useState('');
        const [name, setName] = useState('');
        const [phone, setPhone] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState("");
        const [passwordConfirm, setPasswordConfirm] = useState("");
        const [isPassword, setIsPassword] = useState(false);
        const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
        const [currentPassword, setCurrentPassword] = useState("");
        const [newPassword, setNewPassword] = useState("");
        const [confirmNewPassword, setConfirmNewPassword] = useState("");

        //내정보 수정 버튼 눌렀을때
        const handleEditProfile = async () => {
            try {
                //API 호출 - 내정보 수정
                const response = await axios.put('http://localhost:4000/sign/change-info', {
                    id,
                    name,
                    phone,
                    email,
                });
                console.log('Profile updated successfully:', response.data);
            } catch (error) {
                console.error('Error updating profile:', error);
            }
        };

        

        const handleChangePassword = async () => {
            try {
            // 현재 비밀번호 확인
            const currentPasswordResponse = await axios.post('http://localhost:4000/sign/check-current-password', {
                currentPassword,
            });

            if (currentPasswordResponse.data.success) {
                // 새 비밀번호로 업데이트
                const changePasswordResponse = await axios.put('http://localhost:4000/sign/change-password', {
                newPassword,
                });

                console.log('Password changed successfully:', changePasswordResponse.data);
            } else {
                console.log('Current password is incorrect.');
            }
            } catch (error) {
            console.error('Error changing password:', error);
            }
        };
          

        //비밀번호 변경 여부 확인
        const handelTogglePassword = () => {
            setIsPassword(!isPassword);
        };

        //정보 입력 기준
        const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
            const currentId = e.target.value;
            setId(currentId);
            const idRegExp = /^[a-zA-z0-9]{4,12}$/;
        
          };
        
          const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
            const currentName = e.target.value;
            setName(currentName);
          };
        
          const onChangePhone = (getNumber: string) => {
            const currentPhone = getNumber;
            setPhone(currentPhone);
            const phoneRegExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
          };
        
          const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
            const currentEmail = e.target.value;
            setEmail(currentEmail);
            const emailRegExp =
              /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
          };
        
          const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
            const currentPassword = e.target.value;
            setPassword(currentPassword);
            const passwordRegExp =
              /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
          };
        
          const onChangePasswordConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
            const currentPasswordConfirm = e.target.value;
            setPasswordConfirm(currentPasswordConfirm);
          };

        
          
         

        return(
            <>
            <MyPageAll>
                <MyPageTop>
                    <MPImage></MPImage>
                    <MPToadLabel>Tod</MPToadLabel>
                    <LicenseLabel>라이선스 취득</LicenseLabel>
                    <PublicProfileLabel>공개 명함</PublicProfileLabel>
                    <MPMyPageLabel>마이페이지</MPMyPageLabel>
                </MyPageTop>
                <MyPageList>
                    <MPProfileButton>
                        <MPProfileLabel>회원 정보</MPProfileLabel>
                    </MPProfileButton>
                    <BookmarkLabel>북마크</BookmarkLabel>
                    <EditProfileLabel>명함 수정</EditProfileLabel>
                    <ProfileQuit>회원 탈퇴</ProfileQuit>
                </MyPageList>
                <MPProfileBox>
                <MPEvaluateBox>
                        <MPInfoLabel>평가해야 하는 목록</MPInfoLabel>
                        <MPInfoLine></MPInfoLine>
                        <MPTable>
                            <thead>
                            <tr>
                                <MPTableHeader>문제번호</MPTableHeader>
                                <MPTableHeader>제출자</MPTableHeader>
                                <MPTableHeader>문제이름</MPTableHeader>
                                <MPTableHeader>비고</MPTableHeader>
                            </tr>
                            </thead>
                            <tbody>
                            <MPTableRow>
                                <MPTableData>100</MPTableData>
                                <MPTableData>testman</MPTableData>
                                <MPTableData>[L1]로그인 페이지를 구현해라</MPTableData>
                                <MPTableData>
                                    <SuccessButton>성공</SuccessButton>
                                    <FailureButton>실패</FailureButton>
                                </MPTableData>
                            </MPTableRow>
                            <MPTableRow>
                                <MPTableData>103</MPTableData>
                                <MPTableData>seophohoho</MPTableData>
                                <MPTableData>[L10]만두를 추천</MPTableData>
                                <MPTableData>
                                    <SuccessButton>성공</SuccessButton>
                                    <FailureButton>실패</FailureButton>
                                </MPTableData>
                            </MPTableRow>
                            </tbody>
                        </MPTable>
                    </MPEvaluateBox>
                    
                    <MPInfoBox>
                        <MPInfoLabel>내 정보</MPInfoLabel>
                        <MPInfoLine></MPInfoLine>
                        <MPInfoIdBox>
                            <MPInfoIdLabel>아이디</MPInfoIdLabel>
                            <MPInfoIdInput id="id" name="id" value={id} onChange={onChangeId}/>
                        </MPInfoIdBox>
                        <MPInfoNameBox>
                            <MPInfoNameLabel>이름</MPInfoNameLabel>
                            <MPInfoNameInput id="name" name="name" value={name} onChange={onChangeName}/>
                        </MPInfoNameBox>
                        <MPInfoPhoneBox>
                            <MPInfoPhoneLabel>휴대폰</MPInfoPhoneLabel>
                            <MPInfoPhoneInput id="phone" name="phone" value={phone} onChange={(e) => onChangePhone(e.target.value)}/>
                        </MPInfoPhoneBox>
                        <MPInfoEmailBox>
                            <MPInfoEmailLabel>이메일</MPInfoEmailLabel>
                            <MPInfoEmailInput id="email" name="name" value={email} onChange={onChangeEmail}/>
                        </MPInfoEmailBox>
                    </MPInfoBox>
                    <MPEditButton onClick={handleEditProfile}>
                        <MPEditLabel>수정</MPEditLabel>
                    </MPEditButton>
                    <MPPasswordEditBox>
                        <MPPasswordEditBox2>
                            <MPInfoLabel>비밀번호 수정</MPInfoLabel>
                            <MPInfoLine></MPInfoLine>
                            <MPPasswordNowBox>
                                <MPPasswordNowLabel>현재 비밀번호</MPPasswordNowLabel>
                                <MPPasswordEditInput
                                    type="password"
                                    value={currentPassword}
                                    onChange={(e) => setCurrentPassword(e.target.value)}
                                    />
                            </MPPasswordNowBox>
                            <MPPasswordNowBox>
                                <MPPasswordNowLabel>새 비밀번호</MPPasswordNowLabel>
                                <MPPasswordEditInput
                                    type="password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    />
                            </MPPasswordNowBox>
                            <MPPasswordNowBox>
                                <MPPasswordNowLabel>새 비밀번호 확인</MPPasswordNowLabel>
                                <MPPasswordEditInput
                                    type="password"
                                    value={confirmNewPassword}
                                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                                    />
                            </MPPasswordNowBox>
                        </MPPasswordEditBox2>
                        <ChangeButton onClick={handleChangePassword}>
                            <MPEditLabel>변경</MPEditLabel>
                        </ChangeButton>
                    </MPPasswordEditBox>
                    
               
                </MPProfileBox>
            </MyPageAll>
            </>

        );
      };
      
      export default MyPageInfo;