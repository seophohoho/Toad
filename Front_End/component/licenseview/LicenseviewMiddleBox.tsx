import React, { useState } from "react";
import styled from "styled-components";
import { LicenseviewContainer } from "@/styles/LicenseviewStyle";
import { useEffect } from 'react';
import axios from 'axios';
import { useRouter } from "next/router";
import { FaTimes } from 'react-icons/fa'; // x 아이콘을 사용하기 위해 추가

const Licenseview_MiddleBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #efefef;
`;

const MiddleFrameBox = styled.div`
  width: 1200px;
  height: 1200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const LicenseviewBox = styled.div`
  width: 1200px;
  height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 40px;
  background-color: #FFF;
`;

const LicenseTitleBox = styled.div`
  width: 1100px;
  margin-top: 50px;
  height: 50px;
  font-size: 32px;
  border-bottom: 1px solid #4472c4;
`;

const TitleTextBox = styled.div`
  width: 1100px;
  height: 50px;
  font-size: 32px;
  border-bottom: 1px solid #4472c4;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const TextBox = styled.div`
  width: 1100px;
  height: 80px;
  font-size: 18px;
  margin-top: 20px;
  margin-bottom: 20px;
  white-space: pre-line;
`;

const SubmitButton = styled.label`
  width: 100px;
  height: 40px;
  margin-top: 10px;
  margin-left: 50px;
  cursor: pointer;
  background-color: #4472c4;
  color: white;
  text-align: center;
  text-decoration: none;
  align-self: flex-start;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  border-radius: 5px;
  line-height: 1.5;
  border: 1px solid #000;
`;

const UploadButton = styled.label`
  width: 100px;
  height: 40px;
  margin-top: 20px;
  margin-right: 50px;
  margin-left: auto;
  cursor: pointer;
  background-color: #4472c4;
  color: white;
  text-align: center;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  border-radius: 5px;
  line-height: 1.5;
  border: 1px solid #000;
`;

const SelectedFileText = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-left: 50px;
  font-size: 14px;
  align-self: flex-start;
  color: #333;
`;

const RemoveFileIcon = styled.div`
  margin-left: 5px;
  cursor: pointer;
`;

const PopupContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: #fff;
  border: 1px solid #000;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 999;
`;


const LicenseviewMiddleBoxComponent: React.FC = () => {
  const router = useRouter();
  const { problem_number } = router.query;
  const [licenseInfo, setLicenseInfo] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  useEffect(() => {
    axios.get('http://localhost:4000/license/licenselist')
      .then(response => {
        const filteredData = response.data.filter(item => item.problem_number === Number(problem_number));
        setLicenseInfo(filteredData[0]);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [problem_number]);

  const handleFileUpload = (event) => {
    const selectedFile = event.target.files[0];
    setSelectedFile(selectedFile);
  };

  const removeSelectedFile = () => {
    setSelectedFile(null);
  };

  const showUploadPopup = () => {
    setPopupMessage("업로드 되었습니다.");
    setShowPopup(true);
    goToLicensePage();
  };

  const showNoFilePopup = () => {
    setPopupMessage("파일이 없습니다.");
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const goToLicensePage = () => {
    if (selectedFile) {
      router.push('/license');
    }
  };

  return (
    <Licenseview_MiddleBox>
      <MiddleFrameBox>
        <LicenseviewBox>
          <LicenseTitleBox>[L{licenseInfo?.problem_license}] 문제 제목</LicenseTitleBox>
          <TextBox>{licenseInfo?.problem_title}</TextBox>
          <TitleTextBox>문제 설명</TitleTextBox>
          <TextBox>
            {licenseInfo?.problem_content}
          </TextBox>
          <TitleTextBox>직종/전공분야</TitleTextBox>
          <TextBox>{licenseInfo?.major_field_of}</TextBox>
          <TitleTextBox>제출란</TitleTextBox>
          <SubmitButton>
            제출버튼
            <input type="file" onChange={handleFileUpload} style={{ display: 'none' }} />
          </SubmitButton>
          {selectedFile && (
            <SelectedFileText>
              선택한 파일: {selectedFile.name}
              <RemoveFileIcon onClick={removeSelectedFile}>
                <FaTimes />
              </RemoveFileIcon>
            </SelectedFileText>
          )}
          {showPopup && (
            <PopupContainer>
              <div>{popupMessage}</div>
              <button onClick={closePopup}>닫기</button>
            </PopupContainer>
          )}
          {!selectedFile && !showPopup && (
            <div></div>
          )}
          <UploadButton onClick={selectedFile ? showUploadPopup : showNoFilePopup}>
            업로드
          </UploadButton>
        </LicenseviewBox>
      </MiddleFrameBox>
    </Licenseview_MiddleBox>
  );
};

const LicenseviewMiddleScreen: React.FC = () => {
  return (
    <LicenseviewContainer>
      <LicenseviewMiddleBoxComponent />
    </LicenseviewContainer>
  );
};

export default LicenseviewMiddleScreen;
