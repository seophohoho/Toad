import React, { useState } from "react";
import styled from "styled-components";
import { SignInContainer } from "@/styles/SignInStyle";

const MiddleUpBox = styled.div`
  width: 100%;
  height: 400px;
  background-color: #efefef;
  display: flex;
  flex-direction: column; /* 주축을 세로로 설정 */
  justify-content: space-between;
  align-items: center;
`;

const MiddleUpFrameBox = styled.div`
  width: 1200px;
  height: 400px;
  background-color: transparent;
  display: flex;
  flex-direction: column; /* 주축을 세로로 설정 */
  justify-content: space-between;
`;

const LoginBox = styled.div`
  width: 1200px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #a2cf68;
  margin-bottom: 20px;
  margin-top: 10px;
  order: 1;
`;

const InputField = styled.input`
  height: 25px;
  margin-right: 5px;
  margin-left: 10px;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 5px 10px;
  margin-left: 10px;
  background-color: #fff;
  color: #000;
  border: 2px solid #fff;
  border-radius: 5px;
  cursor: pointer;
`;

const Button2 = styled.button`
  padding: 5px 10px;
  background-color: transparent;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 5px;
  cursor: pointer;
`;

const Button3 = styled.button`
  padding: 0px 0px;
  background-color: transparent;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 12px;
  margin-top: 15px;
`;

const ImageBox = styled.div`
  width: 1200px;
  height: 300px;
  overflow: hidden;
  border-radius: 10px;
  margin-bottom: 40px;
  order: 2;
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SignInMiddleUpBox: React.FC = () => {
  const handleRegisterClick = () => {
    window.location.href = "/signup";
  };

  return (
    <MiddleUpBox>
      <MiddleUpFrameBox>
        <LoginBox>
          {/* ID와 비밀번호 입력 필드 */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <InputField type="text" placeholder="ID" />
            <InputField type="password" placeholder="Password" />
            {/* 로그인 버튼 */}
            <Button>로그인</Button>
            {/* 간격 추가 */}
            <div style={{ marginRight: "10px" }} />
            {/* 회원가입 버튼 */}
            <Button2 onClick={handleRegisterClick}>회원가입</Button2>
            {/* 더 많은 간격 추가 */}
            <div style={{ marginRight: "10px" }} />
            {/* 아이디 찾기 및 비밀번호 재설정 버튼 */}
            <Button3>아이디 찾기/비밀번호 재설정</Button3>
            {/* 간격 추가 */}
            <div style={{ marginRight: "10px" }} />
          </div>
        </LoginBox>
        <ImageBox>
          <BackgroundImage src="images/image.jpg" alt="배경 이미지" />
        </ImageBox>
      </MiddleUpFrameBox>
    </MiddleUpBox>
  );
};

const SignInMiddleUpScreen: React.FC = () => {
  const [userInfo, setUserInfo] = useState({});

  return (
    <SignInContainer>
      <SignInMiddleUpBox />
    </SignInContainer>
  );
};

export default SignInMiddleUpScreen;
