import React, { useState } from "react";
import styled from "styled-components";
import { SignInContainer } from "@/styles/SignInStyle";

const MiddleBox = styled.div`
  width: 100%;
  height: 180px;
  background-color: #a2cf68;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MiddleFrameBox = styled.div`
  width: 1200px;
  height: 180px;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SmallBox = styled.div`
  width: 270px;
  height: 140px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin: 0 0px;
`;

const TextWrapper = styled.div`
  text-align: center;
`;

const LargerText = styled.p`
  font-size: 28px;
  font-weight: bold;
  margin: 5px;
`;

const RegularText = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin: 0;
`;

const SignInMiddleBox: React.FC = () => {
  const handleRegisterClick = () => {
    window.location.href = "/signup";
  };

  return (
    <MiddleBox>
      <MiddleFrameBox>
        <SmallBox>
          <TextWrapper>
            <RegularText>사이트 전체 이용자 수</RegularText>
            <LargerText>25</LargerText>
          </TextWrapper>
        </SmallBox>
        <SmallBox>
          <TextWrapper>
            <RegularText>전체 라이선스</RegularText>
            <LargerText>642</LargerText>
          </TextWrapper>
        </SmallBox>
        <SmallBox>
          <TextWrapper>
            <RegularText>이번 달 취득 라이선스 수</RegularText>
            <LargerText>500</LargerText>
          </TextWrapper>
        </SmallBox>
        <SmallBox>
          <TextWrapper>
            <RegularText>이번 달 신규 라이선스</RegularText>
            <LargerText>25</LargerText>
          </TextWrapper>
        </SmallBox>
      </MiddleFrameBox>
    </MiddleBox>
  );
};

const SignInMiddleScreen: React.FC = () => {
  const [userInfo, setUserInfo] = useState({});

  return (
    <SignInContainer>
      <SignInMiddleBox />
    </SignInContainer>
  );
};

export default SignInMiddleScreen;
