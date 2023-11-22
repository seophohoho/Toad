import React, { useState } from "react";
import styled from "styled-components";
import { LicenseContainer } from "@/styles/LicenseStyle";

const License_MiddleUpBox = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #a2cf68;
`;

const MiddleFrameBox = styled.div`
  width: 1200px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const TextBox1 = styled.div`
  font-size: 26px;
  font-weight: bold; /* 볼드 처리 추가 */
  margin-bottom: 20px;
  margin-left: 20px;
  color: #fff; /* 흰색으로 변경 */
`;

const TextBox2 = styled.div`
  font-size: 16px;
  margin-bottom: 2px;
  margin-left: 20px;
  color: #fff; /* 흰색으로 변경 */
`;

const LicenseMiddleUpBoxComponent: React.FC = () => {
  return (
    <License_MiddleUpBox>
      <MiddleFrameBox>
        <TextBox1>라이선스 취득</TextBox1>
        <TextBox2>지금의 내 수준은 어느 정도일까?</TextBox2>
        <TextBox2>라이선스를 취득하며 스킬을 체크해볼 수 있습니다.</TextBox2>
      </MiddleFrameBox>
    </License_MiddleUpBox>
  );
};

const LicenseMiddleUpScreen: React.FC = () => {
  const [userInfo, setUserInfo] = useState({});

  return (
    <LicenseContainer>
      <LicenseMiddleUpBoxComponent />
    </LicenseContainer>
  );
};

export default LicenseMiddleUpScreen;
