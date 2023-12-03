import React from "react";
import styled from "styled-components";
import { LicenseviewContainer } from "@/styles/LicenseviewStyle";
import { useMemo } from 'react'
import axios from 'axios'
import { useRouter } from "next/router";

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
  margin-top: 40px;
  height: 50px;
  font-size: 32px;
  border-bottom: 2px solid #000
`;

const TitleTextBox = styled.div`
  width: 1100px;
  height: 50px;
  font-size: 32px;
  border-bottom: 2px solid #000
`;

const TextBox = styled.div`
  width: 1100px;
  height: 80px;
  font-size: 18px;
  margin-top: 10px;
`
const FileButton = styled.button`
  width: 100px;
  height: 40px;
  align-self: flex-start;
  margin-top: 20px;
  margin-left:50px;
`;

const LicenseviewMiddleBoxComponent: React.FC = () => {
  const router = useRouter();
  const { problem_number } = router.query;

  const licenseInfo = useMemo(() => {
    if (problem_number !== undefined) {
      // problem_number를 이용해 서버로부터 해당 라이선스 정보를 받아오는 로직
      // 이 부분은 서버와의 통신 방식에 따라 변경이 필요합니다.
      return axios.get(`http://localhost:4000/license/licenselist/${problem_number}`)
        .then(response => response.data)
        console.log(Response)
        .catch(error => {
          console.error(error);
          return null;
        });
    }
  }, [problem_number]);

  if (!licenseInfo) {
    return <div>Loading...</div>; // 혹은 다른 처리 방법을 사용하셔도 됩니다.
  }

  return (
    <Licenseview_MiddleBox>
      <MiddleFrameBox>
        <LicenseviewBox>
          <LicenseTitleBox> {licenseInfo.problem_number} </LicenseTitleBox>
          <TextBox>대충 내용</TextBox>
          <TitleTextBox>문제 설명</TitleTextBox>
          <TextBox>대충 내용</TextBox>
          <TitleTextBox>직종/전공분야</TitleTextBox>
          <TextBox>대충 내용</TextBox>
          <TitleTextBox>제출란</TitleTextBox>
          <FileButton>제출</FileButton>
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