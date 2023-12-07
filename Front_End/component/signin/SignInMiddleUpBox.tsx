import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios"; // Axios 가져오기
import { SignInContainer } from "@/styles/SignInStyle";

const MiddleUpBox = styled.div`
  width: 100%;
  height: 400px;
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const MiddleUpFrameBox = styled.div`
  width: 1200px;
  height: 400px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
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
const LoginBox2 = styled.div`
  width: 1200px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: #a2cf68;
  margin-bottom: 20px;
  margin-top: 10px;
  order: 1;
`;

const LoginText = styled.div`
  width: 150px;
  height: 25px;
  margin-top:5px;
  margin-right: 5px;
  margin-left: 10px;
  display: flex;
  justify-content: flex-start;
  
`

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

const Button4 = styled.button`
  padding: 0px 0px;
  background-color: transparent;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 12px;
  margin-top: 15px;
  margin-left: 10px;
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
let userdata = "";

const SignInMiddleUpBox: React.FC = () => {
  
  const handleRegisterClick = () => {
    window.location.href = "/signup";
  };

  const handleLogin = (userId:any,pw:any) => {
    const loginId = userId;
    const loginPw = pw;
console.log({ "loginId":loginId, 
"loginPw":loginPw 
});

    if (!loginId || !loginPw) {
      // ID 또는 비밀번호가 비어있는 경우 처리
      alert("ID와 비밀번호를 모두 입력하세요");
      return;
    }

    // 인증 엔드포인트로 POST 요청 보내기
    axios.post("http://localhost:4000/sign/signin", 
    { 
      loginId:loginId, 
      loginPw:loginPw 
    }
    )
      .then(response => {
        // 로그인 성공 처리
        console.log("로그인 성공", response.data);
        alert("로그인에 성공했습니다^^");
        setIsLoggedIn(true);
        window.localStorage.setItem("userId", loginId)
        const a = window.localStorage.getItem("userId")
        axios.post("http://localhost:4000/sign/profilecard",
        {
          userId:a
        })
          .then(res =>{
            userdata = res.data[0]
            setUserName(userdata.user_name)
            setUserLicense(userdata.user_license)
          })
          .catch(err =>{
            console.log(err)
          })
      })
      .catch(error => {
        alert("로그인 실패");
        console.error("로그인 실패", error);
      });
  };
  const [userId,setId] = useState("");
  const [pw,setPw] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName,setUserName] = useState("");
  const [userLicense,setUserLicense] = useState("");

  return (
    <MiddleUpBox>
      <MiddleUpFrameBox>
        {isLoggedIn ? (
          <LoginBox2>
            <LoginText>{userName}님 환영합니다!</LoginText>
            <LoginText>현재 License Level : {userLicense}</LoginText>
            <Button4>로그아웃</Button4>
          </LoginBox2>
        ) : (
          <LoginBox>
            {/* ID와 비밀번호 입력 필드 */}
            <div style={{ display: "flex", alignItems: "center" }}>
              <InputField
                type="text"
                value={userId}
                onChange={(e) => {
                  setId(e.target.value);
                }}
                id="idInput"
                placeholder="ID"
              />
              <InputField
                type="password"
                value={pw}
                onChange={(e) => {
                  setPw(e.target.value);
                }}
                id="passwordInput"
                placeholder="비밀번호"
              />
              {/* 로그인 버튼 */}
              <Button onClick={() => handleLogin(userId, pw)}>로그인</Button>
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
        )}
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
