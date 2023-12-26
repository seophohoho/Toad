import React, { useState } from "react";
import styled from "styled-components";
import { LicenseviewContainer } from "@/styles/LicenseviewStyle";

// Logo 컴포넌트
const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const Logo = styled.img`
  padding: 10px 0px; /* 수정된 패딩 값 */
  width: 120px;
  height: 50px; //auto;
  margin-top: 15px;
`;

const LogoComponent: React.FC = () => {
  const handleLogoClick = () => {
    window.location.href = "/signin";
  }
  return (
    <LogoWrapper>
      <Logo src="/images/Icon fa-solid-frog.svg" alt="Logo" onClick={handleLogoClick}/>
    </LogoWrapper>
  );
};

// Button 컴포넌트
const Button = styled.button`
  padding: 10px 70px;
  font-size: 16px;
  background-color: #fff;
  color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px;
`;

interface ButtonProps {
  to: string; // 클릭 시 이동할 경로
  label: string;
}

const ButtonComponent: React.FC<ButtonProps> = ({ to, label }) => {
  const handleClick = () => {
    window.location.href = to; // 페이지 이동
  };

  return <Button onClick={handleClick}>{label}</Button>;
};

// SignIn_TopBox 컴포넌트
const Licenseview_TopBox = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const LicenseviewTopContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const LicenseviewTopBoxComponent: React.FC = () => {
  return (
    <Licenseview_TopBox>
      <LicenseviewTopContent>
        <LogoComponent />
        <ButtonComponent to="/license" label="라이선스 취득" />
        <ButtonComponent to="/signin" label="공개 명함" />
        <ButtonComponent to="/signin" label="ONE 이력서" />
        <ButtonComponent to="/mypageinfo" label="마이페이지" />
      </LicenseviewTopContent>
    </Licenseview_TopBox>
  );
};

// SignInScreen 컴포넌트
const LicenseviewTopScreen: React.FC = () => {
  const [userInfo, setUserInfo] = useState({});

  return (
    <LicenseviewContainer>
      <LicenseviewTopBoxComponent />
      {/* 여기에 나머지 회원가입 입력 부분을 추가할 수 있습니다. */}
    </LicenseviewContainer>
  );
};

export default LicenseviewTopScreen;