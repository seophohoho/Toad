import styled from "styled-components";

/*signupStyle.ts에서 쓸거
TodAll
TodImage
TodLabel
SignUpLabel
InfoLabel 
BottomButton*/

//Info 칸
const InfoMain = styled.div`
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
`;

//Info페이지 회원가입박스
const InfoSignUpBox = styled.button`
    /* Layout Properties */
    top: 123px;
    left: 300px;
    width: 275px;
    height: 95px;
    /* UI Properties */
    background: #CCE3A2 0% 0% no-repeat padding-box;
    border-radius: 8px 8px 0px 0px;
    opacity: 1;
    border: none;
    margin-left: 300px;
    margin-top: 60px;
`;

//Info페이지 상세정보 기입박스
const InfoInfoBox = styled.button`
    /* Layout Properties */
    top: 123px;
    left: 575px;
    width: 275px;
    height: 95px;
    /* UI Properties */
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border-radius: 8px 8px 0px 0px;
    opacity: 1;
    border: none;
`;

//One이력서 제외한 나머지 입력 컨테이너
const OneExceptContainer = styled.div`
    /* Layout Properties */
    top: 262px;
    left: 319px;
    width: 510px;
    height: 507px;
    /* UI Properties */
    opacity: 1;
    margin-left: 20px;
`;


//프로필사진 박스
const ProfileBox = styled.div`
    /* Layout Properties */
    top: 262px;
    left: 319px;
    width: 400px;
    height: 83px;
    /* UI Properties */
    opacity: 1;
`;

//프로필사진 레이블
const ProfileLabel = styled.label`
    /* Layout Properties */
    top: 262px;
    left: 319px;
    width: 106px;
    height: 29px;
    /* UI Properties */
    text-align: left;
    font: normal normal medium 20px/29px Source Han Sans KR;
    letter-spacing: 0px;
    color: #578121;
    opacity: 1;
    margin-bottom: 10px;
    
`;

//프로필사진 입력칸
const ProfileInput = styled.input`
    /* Layout Properties */
    top: 301px;
    left: 319px;
    width: 400px;
    height: 44px;
    /* UI Properties */
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 2px solid #A2CF68;
    border-radius: 8px;
    opacity: 1;
`;

//프로필사진 업로드버튼
const ProfileUploadButton = styled.button`
    /* Layout Properties */
    top: 303px;
    left: 730px;
    width: 110px;
    height: 44px;
    /* UI Properties */
    background: #A2CF68 0% 0% no-repeat padding-box;
    border-radius: 8px;
    opacity: 1;
    margin-bottom: 20px;
`;

//프로필사진 업로드 레이블
const ProfileUploadLabel = styled.label`
    /* Layout Properties */
    top: 311px;
    left: 758px;
    width: 55px;
    height: 29px;
    /* UI Properties */
    text-align: left;
    font: normal normal bold 20px/29px Source Han Sans KR;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
`;

//자신을 표현할 수 있는 사진을 업로드해주세요.
const ProfileGray = styled.label`
    /* Layout Properties */
    top: 347px;
    left: 321px;
    width: 294px;
    height: 21px;
    /* UI Properties */
    text-align: left;
    font: normal normal normal 15px/21px Source Han Sans KR;
    letter-spacing: 0px;
    color: #C4C4C4;
    opacity: 1;
    
`;

//직군 박스
const JobBox = styled.div`
    /* Layout Properties */
    top: 377px;
    left: 319px;
    width: 510px;
    height: 83px;
    /* UI Properties */
    opacity: 1;
    margin-bottom: 20px;
`;

//직군 레이블
const JobLabel = styled.label`
    /* Layout Properties */
    top: 377px;
    left: 319px;
    width: 46px;
    height: 29px;
    /* UI Properties */
    text-align: left;
    font: normal normal medium 20px/29px Source Han Sans KR;
    letter-spacing: 0px;
    color: #578121;
    opacity: 1;
`;

//직군 입력창
const JobSelect = styled.select`
    /* Layout Properties */
    top: 416px;
    left: 319px;
    width: 510px;
    height: 44px;
    /* UI Properties */
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 2px solid #A2CF68;
    border-radius: 8px;
    opacity: 1;

`;

//대분야, 소분야 박스
const BigSmallBox = styled.div`
    /* Layout Properties */
    top: 480px;
    left: 319px;
    width: 510px;
    height: 186px;
    /* UI Properties */
    opacity: 1;
`;

//대분야 레이블
const BigLabel = styled.label`
    /* Layout Properties */
    top: 480px;
    left: 319px;
    width: 65px;
    height: 29px;
    /* UI Properties */
    text-align: left;
    font: normal normal medium 20px/29px Source Han Sans KR;
    letter-spacing: 0px;
    color: #578121;
    opacity: 1;
`;

//대분야 입력창
const BigSelect = styled.select`
    /* Layout Properties */
    top: 519px;
    left: 319px;
    width: 510px;
    height: 44px;
    /* UI Properties */
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 2px solid #A2CF68;
    border-radius: 8px;
    opacity: 1;
    margin-bottom: 20px;
`;

//소분야 레이블
const SmallLabel = styled.label`
    /* Layout Properties */
    top: 583px;
    left: 319px;
    width: 65px;
    height: 29px;
    /* UI Properties */
    text-align: left;
    font: normal normal medium 20px/29px Source Han Sans KR;
    letter-spacing: 0px;
    color: #578121;
    opacity: 1;
`;

//소분야 입력창
const SmallSelect = styled.select`
    /* Layout Properties */
    top: 622px;
    left: 319px;
    width: 510px;
    height: 44px;
    /* UI Properties */
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 2px solid #A2CF68;
    border-radius: 8px;
    opacity: 1;
`;

//휴대폰 박스
const InfoPhoneBox = styled.div`
    /* Layout Properties */
    top: 686px;
    left: 319px;
    width: 510px;
    height: 83px;
    /* UI Properties */
    opacity: 1;
`

//휴대폰 레이블
const InfoPhoneLabel = styled.label`
    /* Layout Properties */
    top: 686px;
    left: 319px;
    width: 65px;
    height: 29px;
    /* UI Properties */
    text-align: left;
    font: normal normal medium 20px/29px Source Han Sans KR;
    letter-spacing: 0px;
    color: #578121;
    opacity: 1;
`;

//휴대폰 입력창
const InfoPhoneInput = styled.input`
    /* Layout Properties */
    top: 725px;
    left: 319px;
    width: 510px;
    height: 44px;
    /* UI Properties */
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 2px solid #A2CF68;
    border-radius: 8px;
    opacity: 1;
`;

//One이력서 박스
const OneBox = styled.div`
    /* Layout Properties */
    top: 794px;
    left: 319px;
    width: 400px;
    height: 83px;
    /* UI Properties */
    opacity: 1;
    margin-left: 20px;
`;

//One이력서 레이블
const OneLabel = styled.label`
        /* Layout Properties */
    top: 794px;
    left: 319px;
    width: 99px;
    height: 29px;
    /* UI Properties */
    text-align: left;
    font: normal normal medium 20px/29px Source Han Sans KR;
    letter-spacing: 0px;
    color: #578121;
    opacity: 1;
`;

//One이력서 입력창
const OneInput = styled.input`
    /* Layout Properties */
    top: 833px;
    left: 319px;
    width: 400px;
    height: 44px;
    /* UI Properties */
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 2px solid #A2CF68;
    border-radius: 8px;
    opacity: 1;
`;

//One이력서 업로드 버튼
const OneUploadButton = styled.button`
    /* Layout Properties */
    top: 835px;
    left: 730px;
    width: 110px;
    height: 44px;
    /* UI Properties */
    background: #A2CF68 0% 0% no-repeat padding-box;
    border-radius: 8px;
    opacity: 1;
`;

//One이력서 업로드 레이블
const OneUploadLabel = styled.label`
    /* Layout Properties */
    top: 843px;
    left: 758px;
    width: 55px;
    height: 29px;
    /* UI Properties */
    text-align: left;
    font: normal normal bold 20px/29px Source Han Sans KR;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
`;

//한페이지로 정리된 이력서를 업로드해주세요
const OneGray = styled.label`
    /* Layout Properties */
    top: 887px;
    left: 319px;
    width: 287px;
    height: 42px;
    /* UI Properties */
    text-align: left;
    font: normal normal normal 15px/21px Source Han Sans KR;
    letter-spacing: 0px;
    color: #C4C4C4;
    opacity: 1;
`;

//상세정보 기입 등록버튼
const InfoRegiButton = styled.button`
    /* Layout Properties */
    top: 980px;
    left: 323px;
    width: 510px;
    height: 48px;
    /* UI Properties */
    background: #A2CF68 0% 0% no-repeat padding-box;
    border-radius: 8px;
    opacity: 1;
    margin-left: 20px;
`;

//상세정보기입 등록 레이블
const InfoRegiLabel = styled.label`
    /* Layout Properties */
    top: 990px;
    left: 563px;
    width: 37px;
    height: 29px;
    /* UI Properties */
    text-align: left;
    font: normal normal bold 20px/29px Source Han Sans KR;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
`;

export{
    InfoMain,
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
    InfoRegiLabel
};
