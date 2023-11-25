import styled from "styled-components";

//전체 페이지
const TodAll = styled.div`
  /* Layout Properties */
  top: 0px;
  left: 0px;
  width: 1920px;
  height: 1154px;
  /* UI Properties */
  background: #A2CF68 0% 0% no-repeat padding-box;
  opacity: 1;
  
`;


//상단 두꺼비 이미지
const TodImage = styled.img`
    /* Layout Properties */
  top: 27px;
  left: 300px;
  width: 46px;
  height: 36px;
  /* UI Properties */
  background: #FFFFFF 0% 0% no-repeat padding-box;
  opacity: 1;
  margin-top: 27px;
  margin-left: 300px;
`;

//상단 두꺼비옆 레이블
const TodLabel = styled.label`
    /* Layout Properties */
  top: 25px;
  left: 350px;
  width: 76px;
  height: 41px;
  /* UI Properties */
  text-align: center;
  font: normal normal bold 36px/41px NEXON Lv2 Gothic OTF;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;
  
`;

//회원가입 칸
const TodSignUp = styled.button`
  /* Layout Properties */
  top: 123px;
  left: 300px;
  width: 275px;
  height: 95px;
  /* UI Properties */
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border-radius: 8px 8px 0px 0px;
  opacity: 1;
  font-size: 20px;
  border: none;
  margin-top: 60px;
  margin-left: 300px;

`;

//상세정보기입 칸
const TodInfo = styled.button`
  top: 123px;
  left: 575px;
  width: 275px;
  height: 95px;
  background: #CCE3A2 0% 0% no-repeat padding-box;
  border-radius: 8px 8px 0px 0px;
  opacity: 1;
  font-size: 20px;
  border : none;

`;

//회원가입 레이블
const SignUpLabel = styled.label`
  /* Layout Properties */
  top: 156px;
  left: 410px;
  width: 74px;
  height: 29px;
  /* UI Properties */
  text-align: left;
  font: normal normal medium 20px/29px Source Han Sans KR;
  letter-spacing: 0px;
  color: #578121;
  opacity: 1;
`;

//상세정보기입 레이블
const InfoLabel = styled.label`
  /* Layout Properties */
  top: 156px;
  left: 410px;
  width: 74px;
  height: 29px;
  /* UI Properties */
  text-align: left;
  font: normal normal medium 20px/29px Source Han Sans KR;
  letter-spacing: 0px;
  color: #578121;
  opacity: 1;
`;


//회원가입정보 전체 창
const TodMain = styled.div`
  /* Layout Properties */
  top: 218px;
  left: 300px;
  width: 550px;
  height: 841px;
  /* UI Properties */
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border-radius: 0px 0px 8px 8px;
  opacity: 1;
  margin-left: 300px;
  margin-bottom: 16px;
`;

//회원가입 정보입력창
const SignupInfo = styled.div`
  /* Layout Properties */
  top: 262px;
  left: 319px;
  width: 510px;
  height: 549px;
  /* UI Properties */
  opacity: 1;
  margin-bottom: 20px;
`;

//아이디(레이블, 입력창) 들어가는곳
const TodId = styled.div`
  /* Layout Properties */
  top: 262px;
  left: 319px;
  width: 510px;
  height: 83px;
  /* UI Properties */
  opacity: 1;
  margin-bottom: 20px;
  margin-left: 20px;
`;

//아이디 레이블
const IdLabel = styled.label`
  /* Layout Properties */
  top: 262px;
  left: 319px;
  width: 55px;
  height: 29px;
  /* UI Properties */
  text-align: left;
  font: normal normal medium 20px/29px Source Han Sans KR;
  letter-spacing: 0px;
  color: #578121;
  opacity: 1;
  margin-top: 44px;
`;

//아이디 입력창
const IdInput = styled.input`
  /* Layout Properties */
  top: 301px;
  left: 319px;
  width: 510px;
  height: 44px;
  /* UI Properties */
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 2px solid #A2CF68;
  border-radius: 8px;
  opacity: 1;
  margin-top: 10px;
  outline: none;
  
`;

//이름(레이블, 입력창) 들어가는곳
const TodName = styled.div`
  /* Layout Properties */
  top: 365px;
  left: 319px;
  width: 510px;
  height: 83px;
  /* UI Properties */
  opacity: 1;
  margin-bottom: 20px;
  margin-left: 20px;
`;

//이름 레이블
const NameLabel = styled.label`
  /* Layout Properties */
  top: 365px;
  left: 319px;
  width: 37px;
  height: 29px;
  /* UI Properties */
  text-align: left;
  font: normal normal medium 20px/29px Source Han Sans KR;
  letter-spacing: 0px;
  color: #578121;
  opacity: 1;
  margin-bottom: 10px;
`;

//이름 입력창
const NameInput = styled.input`
  /* Layout Properties */
  top: 404px;
  left: 319px;
  width: 510px;
  height: 44px;
  /* UI Properties */
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 2px solid #A2CF68;
  border-radius: 8px;
  opacity: 1;
  margin-top: 10px;
  outline: none;
`;

//휴대폰, 이메일 들어가는 곳
const TodPhoneEmail = styled.div`
  /* Layout Properties */
  top: 468px;
  left: 319px;
  width: 510px;
  height: 186px;
  /* UI Properties */
  opacity: 1;
  margin-left: 20px;
`;

//휴대폰 레이블
const PhoneLabel = styled.label`
  /* Layout Properties */
  top: 468px;
  left: 319px;
  width: 55px;
  height: 29px;
  /* UI Properties */
  text-align: left;
  font: normal normal medium 20px/29px Source Han Sans KR;
  letter-spacing: 0px;
  color: #578121;
  opacity: 1;
`;

//휴대폰 입력창
const PhoneInput = styled.input`
  /* Layout Properties */
  top: 507px;
  left: 319px;
  width: 510px;
  height: 44px;
  /* UI Properties */
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 2px solid #A2CF68;
  border-radius: 8px;
  opacity: 1;
  margin-top: 10px;
  outline: none;
`;

//이메일 레이블
const EmailLabel = styled.label`
  /* Layout Properties */
  top: 571px;
  left: 319px;
  width: 55px;
  height: 29px;
  /* UI Properties */
  text-align: left;
  font: normal normal medium 20px/29px Source Han Sans KR;
  letter-spacing: 0px;
  color: #578121;
  opacity: 1;
`;

//이메일 입력창
const EmailInput = styled.input`
  /* Layout Properties */
  top: 610px;
  left: 319px;
  width: 510px;
  height: 44px;
  /* UI Properties */
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 2px solid #A2CF68;
  border-radius: 8px;
  opacity: 1;
  margin-top: 10px;
  outline: none;
`;

//비밀번호 들어가는곳
const TodPassword = styled.div`
  /* Layout Properties */
  top: 674px;
  left: 319px;
  width: 510px;
  height: 83px;
  /* UI Properties */
  opacity: 1;
  margin-left: 20px;
`;

//비밀번호 레이블
const PasswordLabel = styled.label`
  /* Layout Properties */
  top: 674px;
  left: 319px;
  width: 74px;
  height: 29px;
  /* UI Properties */
  text-align: left;
  font: normal normal medium 20px/29px Source Han Sans KR;
  letter-spacing: 0px;
  color: #578121;
  opacity: 1;
`;

//비밀번호 입력창
const PasswordInput = styled.input`
  /* Layout Properties */
  top: 713px;
  left: 319px;
  width: 510px;
  height: 44px;
  /* UI Properties */
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 2px solid #A2CF68;
  border-radius: 8px;
  opacity: 1;
  outline: none;
`;

//비밀번호 보이게하는거
const PasswordVisible = styled.button`
  /* Layout Properties */
  top: 725px;
  left: 784px;
  width: 30px;
  height: 20px;
  /* UI Properties */
  background: transparent url('img/Icon awesome-eye.png') 0% 0% no-repeat padding-box;
  opacity: 1;
`;

//비밀번호 재입력창
const PasswordInputRe = styled.input`
  /* Layout Properties */
  top: 767px;
  left: 319px;
  width: 510px;
  height: 44px;
  /* UI Properties */
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 2px solid #A2CF68;
  border-radius: 8px;
  opacity: 1;
  margin-left: 20px;
  outline: none;
`;

//비밀번호 재입력한거 보이게하는거
const PasswordVisibleRe = styled.button`
  /* Layout Properties */
  top: 779px;
  left: 784px;
  width: 30px;
  height: 20px;
  /* UI Properties */
  background: #777777 0% 0% no-repeat padding-box;
  opacity: 1;
`;

//전체동의 체크박스
const AllCheckBox = styled.input`
    /* Layout Properties */
  top: 849px;
  left: 323px;
  width: 22px;
  height: 22px;
  /* UI Properties */
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #C4C4C4;
  border-radius: 4px;
  opacity: 1;
  margin-left: 20px;
`;

//전체동의 레이블
const AllCheckBoxLabel = styled.label`
  /* Layout Properties */
  top: 847px;
  left: 353px;
  width: 70px;
  height: 26px;
  /* UI Properties */
  text-align: left;
  font: normal normal medium 18px/26px Source Han Sans KR;
  letter-spacing: 0px;
  color: #777777;
  opacity: 1;
`;

//전체동의 밑 실선
const TodLine = styled.div`
  /* Layout Properties */
  top: 887px;
  left: 319px;
  width: 510px;
  height: 0px;
  /* UI Properties */
  border: 2px solid #578121;
  opacity: 1;
  margin-left: 20px;
`;

//이용약관 동의 체크박스
const FirstCheckBox = styled.input`
  /* Layout Properties */
  top: 902px;
  left: 323px;
  width: 22px;
  height: 22px;
  /* UI Properties */
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #C4C4C4;
  border-radius: 4px;
  opacity: 1;
  margin-bottom: 14px;
  margin-left: 20px;
`;

//이용약관 동의 레이블
const FirstCheckBoxLabel = styled.label`
  /* Layout Properties */
  top: 900px;
  left: 353px;
  width: 112px;
  height: 26px;
  /* UI Properties */
  text-align: left;
  letter-spacing: 0px;
  color: #777777;
  opacity: 1;
`;

//프로그래머스 동의 체크박스
const SecondCheckBox = styled.input`
  /* Layout Properties */
  top: 942px;
  left: 323px;
  width: 22px;
  height: 22px;
  /* UI Properties */
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #C4C4C4;
  border-radius: 4px;
  opacity: 1;
`;

//프로그래머스 동의 레이블
const SecondCheckBoxLabel = styled.label`
  /* Layout Properties */
  top: 940px;
  left: 353px;
  width: 315px;
  height: 26px;
  /* UI Properties */
  text-align: left;
  letter-spacing: 0px;
  color: #777777;
  opacity: 1;
`;

//등록 버튼
const Regi = styled.button`
  /* Layout Properties */
  top: 980px;
  left: 319px;
  width: 510px;
  height: 48px;
  /* UI Properties */
  background: #A2CF68 0% 0% no-repeat padding-box;
  border-radius: 8px;
  opacity: 1;
  border: none;
  margin-left: 20px;
  
`;

//등록 레이블
const RegiLabel = styled.label`
  /* Layout Properties */
  top: 990px;
  left: 559px;
  width: 37px;
  height: 29px;
  /* UI Properties */
  text-align: left;
  font: normal normal bold 20px/29px Source Han Sans KR;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;
`;

//이용약관, 개인정보처리방침
const BottomButton = styled.button`
  /* Layout Properties */
  top: 1075px;
  left: 436px;
  width: 284px;
  height: 29px;
  /* UI Properties */
  text-align: center;
  font: normal normal medium 20px/29px Source Han Sans KR;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;
  margin-left: 436px;
  border: none;
`;

//상단 회원가입, 상세페이지 감싸는것
const SignUpTop = styled.div`
  .header{
    background-color: #f8f8f8;
    padding: 10px;
    text-align: center;
  }
  .header h1 {
  margin: 0; 
  font-size: 40px; 
  color: #333; 
  font-weight: bold; 


}
`;






export {
  TodAll,
  TodImage,
  TodLabel,
  TodSignUp,
  TodInfo,
  SignUpLabel,
  InfoLabel,
  TodMain,
  SignupInfo,
  TodId,
  IdLabel,
  IdInput,
  TodName,
  NameLabel,
  NameInput,
  TodPhoneEmail,
  PhoneLabel,
  PhoneInput,
  EmailLabel,
  EmailInput,
  TodPassword,
  PasswordLabel,
  PasswordInput,
  PasswordVisible,
  PasswordInputRe,
  PasswordVisibleRe,
  AllCheckBox,
  AllCheckBoxLabel,
  TodLine,
  FirstCheckBox,
  FirstCheckBoxLabel,
  SecondCheckBox,
  SecondCheckBoxLabel,
  Regi,
  RegiLabel,
  BottomButton,
  SignUpTop

};