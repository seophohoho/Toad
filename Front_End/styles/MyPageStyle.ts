import styled from "styled-components";

//마이페이지 전체
const MyPageAll = styled.div`
    /* Layout Properties */
    top: 0px;
    left: 0px;
    width: 1920px;
    height: 1639px;
    /* UI Properties */
    background: #F5F5F5 0% 0% no-repeat padding-box;
    opacity: 1;
    overflow: auto;
`;

//마이페이지 상단 박스
const MyPageTop = styled.div`
    /* Layout Properties */
    top: 0px;
    left: -16px;
    width: 1900px;
    height: 90px;
    /* UI Properties */
    background: #FFFFFF 0% 0% no-repeat padding-box;
    opacity: 1;
    margin-bottom: 25px;
    
`;

//두꺼비 이미지
const MPImage = styled.img`
    /* Layout Properties */
    top: 27px;
    left: 300px;
    width: 46px;
    height: 36px;
    /* UI Properties */
    margin-top: 27px;
    margin-bottom: 27px;
    margin-left: 300px;
`;

//두꺼비 옆 토드
const MPToadLabel = styled.label`
    /* Layout Properties */
    top: 25px;
    left: 350px;
    width: 76px;
    height: 41px;
    /* UI Properties */
    text-align: center;
    font: normal normal bold 36px/41px NEXON Lv2 Gothic OTF;
    letter-spacing: 0px;
    color: #578121;
    opacity: 1;
    margin-top: 25px;
    margin-bottom: 24px;
    margin-right: 204px;
`;

//라이선스 취득 레이블
const LicenseLabel = styled.label`
    /* Layout Properties */
    top: 35px;
    left: 630px;
    width: 114px;
    height: 29px;
    /* UI Properties */
    text-align: center;
    font: normal normal medium 20px/29px Source Han Sans KR;
    letter-spacing: 0px;
    color: #2B2B2B;
    opacity: 1;
    margin-top: 35px;
    margin-bottom: 26px;
    margin-right: 106px;
`;

//공개명함 레이블
const PublicProfileLabel = styled.label`
    /* Layout Properties */
    top: 35px;
    left: 850px;
    width: 78px;
    height: 29px;
    /* UI Properties */
    text-align: center;
    font: normal normal medium 20px/29px Source Han Sans KR;
    letter-spacing: 0px;
    color: #2B2B2B;
    opacity: 1;
    margin-top: 35px;
    margin-bottom: 26px;
    margin-right: 142px;
`;

//마이페이지 레이블
const MPMyPageLabel = styled.label`
    /* Layout Properties */
    top: 35px;
    left: 1070px;
    width: 92px;
    height: 29px;
    /* UI Properties */
    text-align: center;
    font: normal normal medium 20px/29px Source Han Sans KR;
    letter-spacing: 0px;
    color: #578121;
    opacity: 1;
`;

//회원정보, 북마크, 명함수정, 회원탈퇴 있는곳
const MyPageList = styled.div`
    /* Layout Properties */
    top: 90px;
    left: -29px;
    width: 1978px;
    height: 95px;
    /* UI Properties */
    background: #A2CF68 0% 0% no-repeat padding-box;
    opacity: 1;
    margin-bottom: 19.6px;
`;

//회원정보 버튼
const MPProfileButton = styled.button`
    /* Layout Properties */
    top: 90px;
    left: 300px;
    width: 330px;
    height: 95px;
    /* UI Properties */
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border-radius: 0px 0px 9px 9px;
    opacity: 1;
    border: none;
    margin-right: 137px;
    margin-left: 300px;
`;

//회원정보 레이블
const MPProfileLabel = styled.label`
    /* Layout Properties */
    top: 123px;
    left: 426px;
    width: 78px;
    height: 29px;
    /* UI Properties */
    text-align: left;
    font: normal normal medium 20px/29px Source Han Sans KR;
    letter-spacing: 0px;
    color: #578121;
    opacity: 1;
`;

//북마크 레이블
const BookmarkLabel = styled.label`
    /* Layout Properties */
    top: 123px;
    left: 767px;
    width: 56px;
    height: 29px;
    /* UI Properties */
    text-align: center;
    font: normal normal medium 20px/29px Source Han Sans KR;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    margin-right: 265px;
`;

//명함 수정 레이블
const EditProfileLabel = styled.label`
    /* Layout Properties */
    top: 123px;
    left: 1088px;
    width: 78px;
    height: 29px;
    /* UI Properties */
    text-align: center;
    font: normal normal medium 20px/29px Source Han Sans KR;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    margin-right: 248px;
`;

//회원탈퇴 레이블
const ProfileQuit = styled.label`
    /* Layout Properties */
    top: 123px;
    left: 1414px;
    width: 78px;
    height: 29px;
    /* UI Properties */
    text-align: center;
    font: normal normal medium 20px/29px Source Han Sans KR;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
`;

//회원정보 입력 박스
const MPProfileBox = styled.div`
    /* Layout Properties */
    top: 205px;
    left: 300px;
    width: 1320px;
    height: 1639px;
    /* UI Properties */
    background: #FFFFFF 0% 0% no-repeat padding-box;
    opacity: 1;
    margin-left: 300px;
    margin-right: 300px;
    margin-bottom: 60px;
`;

//회원정보 페이지 내정보 박스
const MPInfoBox = styled.div`
    /* Layout Properties */
    top: 290px;
    left: 520px;
    width: 880px;
    height: 362px;
    /* UI Properties */
    opacity: 1;
    margin-top: 50px;
    margin-left: 220px;
    margin-bottom: 20px;
`;

//회원정보 페이지 내정보 레이블
const MPInfoLabel = styled.label`
    /* Layout Properties */
    top: 290px;
    left: 520px;
    width: 80px;
    height: 36px;
    /* UI Properties */
    text-align: left;
    font: normal normal bold 25px/36px Source Han Sans KR;
    letter-spacing: 0px;
    color: #578121;
    opacity: 1;
    margin-bottom: 4px;
`;

//내정보 밑에 실선
const MPInfoLine = styled.div`
    /* Layout Properties */
    top: 330px;
    left: 520px;
    width: 880px;
    height: 0px;
    /* UI Properties */
    border: 2px solid #578121;
    opacity: 1;
    margin-bottom: 33px;
`;

//회원정보 페이지 아이디 컨테이너
const MPInfoIdBox = styled.div`
    /* Layout Properties */
    top: 356px;
    left: 520px;
    width: 550px;
    height: 44px;
    /* UI Properties */
    opacity: 1;
    margin-bottom: 40px;
    display: flex;
    flex-direction: row;
`;

//회원정보 페이지 아이디 레이블
const MPInfoIdLabel = styled.label`
    /* Layout Properties */
    top: 363px;
    left: 520px;
    width: 55px;
    height: 29px;
    /* UI Properties */
    text-align: left;
    font: normal normal medium 20px/29px Source Han Sans KR;
    letter-spacing: 0px;
    color: #578121;
    opacity: 1;
    margin-right: 165px;
    font-size: 20px;
`;

//회원가입 페이지 아이디 입력창
const MPInfoIdInput = styled.input`
    top: 356px;
    left: 740px;
    width: 330px;
    height: 44px;
    background: #F6F6F6 0% 0% no-repeat padding-box;
    border: 2px solid #A2CF68;
    border-radius: 8px;
    opacity: 1;
    outline: none;
`;

//회원가입 페이지 이름 컨테이너
const MPInfoNameBox = styled.div`
    /* Layout Properties */
    top: 440px;
    left: 520px;
    width: 550px;
    height: 44px;
    /* UI Properties */
    opacity: 1;
    margin-bottom: 40px;
    display: flex;
    flex-direction: row;
`;

//회원가입 페이지 이름 레이블
const MPInfoNameLabel = styled.label`
    /* Layout Properties */
    top: 447px;
    left: 520px;
    width: 37px;
    height: 29px;
    /* UI Properties */
    text-align: left;
    font: normal normal medium 20px/29px Source Han Sans KR;
    letter-spacing: 0px;
    color: #578121;
    opacity: 1;
    margin-right: 183px;
    font-size: 20px;
`;

//회원가입 페이지 이름 입력창
const MPInfoNameInput = styled.input`
    /* Layout Properties */
    top: 440px;
    left: 740px;
    width: 330px;
    height: 44px;
    /* UI Properties */
    background: #F6F6F6 0% 0% no-repeat padding-box;
    border: 2px solid #A2CF68;
    border-radius: 8px;
    opacity: 1;
    outline: none;
`;

//회원가입 페이지 휴대폰 컨테이너
const MPInfoPhoneBox = styled.div`
    /* Layout Properties */
    top: 524px;
    left: 520px;
    width: 550px;
    height: 44px;
    /* UI Properties */
    opacity: 1;
    margin-bottom: 40px;
    display: flex;
    flex-direction: row;
`;

//회원가입 페이지 휴대폰 레이블
const MPInfoPhoneLabel = styled.label`
    /* Layout Properties */
    top: 531px;
    left: 520px;
    width: 55px;
    height: 29px;
    /* UI Properties */
    text-align: left;
    font: normal normal medium 20px/29px Source Han Sans KR;
    letter-spacing: 0px;
    color: #578121;
    opacity: 1;
    margin-right: 165px;
    font-size: 20px;
`;

//회원가입 페이지 휴대폰 입력창
const MPInfoPhoneInput = styled.input`
    /* Layout Properties */
    top: 524px;
    left: 740px;
    width: 330px;
    height: 44px;
    /* UI Properties */
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 2px solid #A2CF68;
    border-radius: 8px;
    opacity: 1;
    outline: none;
`;

//회원가입 페이지 이메일 컨테이너
const MPInfoEmailBox = styled.div`
    /* Layout Properties */
    top: 608px;
    left: 520px;
    width: 550px;
    height: 44px;
    /* UI Properties */
    opacity: 1;
    display: flex;
    flex-direction: row;
`;

//회원가입 페이지 이메일 레이블
const MPInfoEmailLabel = styled.label`
    /* Layout Properties */
    top: 615px;
    left: 520px;
    width: 55px;
    height: 29px;
    /* UI Properties */
    text-align: left;
    font: normal normal medium 20px/29px Source Han Sans KR;
    letter-spacing: 0px;
    color: #578121;
    opacity: 1;
    margin-right: 165px;
    font-size: 20px;
`;

//회원가입 페이지 이메일 입력창
const MPInfoEmailInput = styled.input`
    /* Layout Properties */
    top: 608px;
    left: 740px;
    width: 330px;
    height: 44px;
    /* UI Properties */
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 2px solid #A2CF68;
    border-radius: 8px;
    opacity: 1;
    outline: none;
`;

//회원가입 페이지 수정 버튼
const MPEditButton = styled.button`
    /* Layout Properties */
    top: 672px;
    left: 1290px;
    width: 110px;
    height: 48px;
    /* UI Properties */
    background: #A2CF68 0% 0% no-repeat padding-box;
    border-radius: 8px;
    opacity: 1;
    margin-top: 20px;
    margin-left: 990px;
    margin-bottom: 50px;
`;

//회원가입 페이지 수정 레이블
const MPEditLabel = styled.label`
    /* Layout Properties */
    top: 682px;
    left: 1327px;
    width: 37px;
    height: 29px;
    /* UI Properties */
    text-align: left;
    font: normal normal bold 20px/29px Source Han Sans KR;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
`;

//비밀번호 수정 박스(변경버튼 포함)
const MPPasswordEditBox = styled.div`
    /* Layout Properties */
    top: 770px;
    left: 520px;
    width: 880px;
    height: 352px;
    /* UI Properties */
    opacity: 1;
    margin-left: 220px;
    margin-bottom: 26px;
`;

//비밀번호 수정박스(변경버튼 제외)
const MPPasswordEditBox2 = styled.div`
    /* Layout Properties */
    top: 770px;
    left: 520px;
    width: 880px;
    height: 278px;
    /* UI Properties */
    opacity: 1;
    margin-bottom: 26px;
`;

//비밀번호 수정 레이블
const MPPasswordEditLabel = styled.label`
    /* Layout Properties */
    top: 770px;
    left: 520px;
    width: 144px;
    height: 36px;
    /* UI Properties */
    text-align: left;
    font: normal normal bold 25px/36px Source Han Sans KR;
    letter-spacing: 0px;
    color: #578121;
    opacity: 1;
`;

//비밀번호 수정 입력창
const MPPasswordEditInput = styled.input`
    /* Layout Properties */
    top: 836px;
    left: 740px;
    width: 660px;
    height: 44px;
    /* UI Properties */
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 2px solid #A2CF68;
    border-radius: 8px;
    opacity: 1;
    outline: none;
`;

//현재 비밀번호 박스
const MPPasswordNowBox = styled.div`
    /* Layout Properties */
    top: 836px;
    left: 520px;
    width: 880px;
    height: 44px;
    /* UI Properties */
    opacity: 1;
    margin-bottom: 40px;
    display: flex;
    flex-direction: row;
`;

//현재 비밀번호 레이블
const MPPasswordNowLabel = styled.label`
    /* Layout Properties */
    top: 844px;
    left: 520px;
    width: 115px;
    height: 29px;
    /* UI Properties */
    text-align: left;
    font: normal normal medium 20px/29px Source Han Sans KR;
    letter-spacing: 0px;
    color: #578121;
    opacity: 1;
    margin-right: 105px;
    font-size: 20px;
`;

//변경 버튼
const ChangeButton = styled.button`
    /* Layout Properties */
    top: 1074px;
    left: 1290px;
    width: 110px;
    height: 48px;
    /* UI Properties */
    background: #A2CF68 0% 0% no-repeat padding-box;
    border-radius: 8px;
    opacity: 1;
    margin-left: 770px;
`;

//평가항목표를 위한 스타일
const MPTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  background: #CCE3A2 0% 0% no-repeat padding-box;
`;

const MPTableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  background: #A2CF68 0% 0% no-repeat padding-box;
  color: #FFFFFF;
`;

const MPTableRow = styled.tr`
  &:nth-child(even) {
    background: #CCE3A2 0% 0% no-repeat padding-box;
  }
`;

const MPTableData = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  color: #FFFFFF;
`;

//평가해야 하는 목록 박스
const MPEvaluateBox = styled.div`
    /* Layout Properties */
    top: 770px;
    left: 520px;
    width: 880px;
    height: 352px;
    /* UI Properties */
    opacity: 1;
    margin-left: 220px;
    margin-bottom: 26px;
`;

//성공버튼
const SuccessButton = styled.button`
  padding: 5px 10px;
  background-color: red;
  border: none;
  cursor: pointer;
  font-size: 14px;
  color: white;
`;
//실패버튼
const FailureButton = styled.button`
  padding: 5px 10px;
  background-color: blue;
  border: none;
  cursor: pointer;
  font-size: 14px;
  color: white;
`;

//상단 버튼
const InvisibleButton = styled.button`
  display: none;
`;


export {
    MyPageAll,
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
    MPPasswordEditLabel,
    MPPasswordNowBox,
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
};