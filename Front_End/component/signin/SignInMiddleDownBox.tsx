import React, { useState } from "react";
import styled from "styled-components";
import { SignInContainer } from "@/styles/SignInStyle";

const MiddleDownBox = styled.div`
  width: 100%;
  height: 700px;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

const MiddleDownLeftFrameBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const MiddleDownRightFrameBox = styled.div`
  width: 560px;
  height: 620px;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-top: 20px;
`;

const MiddleDownLeftTitleBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  margin-top: 20px;
`;

const LeftTopSection = styled.div`
  width: 100%;
  height: 70px;
  background-color: #cce3a2;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #3f3f3f;
  font-weight: bold;
  font-size: 24px;
`;

const LeftTopSectionIcon = styled.span`
  margin-left: 30px;
  margin-right: 10px;
  font-size: 24px; /* 아이콘 크기 설정 */
`;

const LeftBottomSection = styled.div`
  width: 100%;
  height: calc(100% - 70px);
  background-color: #fff;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  overflow-y: auto;
`;

const LeftMarginContainer = styled.div`
  width: 550px;
  height: 50px;
  background-color: transparent;
  margin-top: 270px;
`;

const LeftTextContainer = styled.div`
  width: 550px;
  height: 50px;
  background-color: #f5f5f5;
  border-radius: 5px;
  padding: 5px 0;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

const LeftTextIcon = styled.span`
  margin-left: 10px;
  margin-right: 10px;
  font-size: 24px; /* 아이콘 크기 설정 */
`;

const LeftTextComment = styled.p`
  font-size: 22px;
  font-weight: bold;
`;
const LeftTextCount = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-left: 20px;
  margin-right: 17px;
`;

const MiddleDownRightUpTitleBox = styled.div`
  width: 600px;
  height: 200px;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  margin-top: 20px;
`;

const RightUpTopSection = styled.div`
  width: 100%;
  height: 70px;
  background-color: #cce3a2;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #3f3f3f;
  font-weight: bold;
  font-size: 24px;
`;

const RightUpTopSectionMargin = styled.p`
  margin-left: 25px;
`;

const RightUpBottomSection = styled.div`
  width: 100%;
  height: calc(100% - 70px);
  background-color: #fff;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const RightUpTextContainer = styled.div`
  width: 550px;
  height: 10px;
  border-radius: 5px;
  font-size: 15px;
`;

const MiddleDownRightDownTitleBox = styled.div`
  width: 600px;
  height: 400px;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  margin-top: 20px;
`;

const RightDownTopSection = styled.div`
  width: 100%;
  height: 70px;
  background-color: #cce3a2;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #3f3f3f;
  font-weight: bold;
  font-size: 24px;
`;

const RightDownTopSectionMargin = styled.p`
  margin-left: 25px;
`;

const RightDownBottomSection = styled.div`
  width: 100%;
  height: calc(100% - 70px);
  background-color: #fff;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const RightDownTextContainer = styled.div`
  width: 550px;
  height: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
  padding: 15px 0;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

const RightDownMajorBox = styled.div`
  width: 100px;
  height: 30px;
  background-color: #fffa99;
  margin-left: 15px;
  border-radius: 5px;
  text-align: center;
  font-weight: bold;
  color: #3f3f3f;
`;

const RightDownMajorText = styled.p`
  margin-left: 20px;
  font-weight: bold;
  font-size: 18px;
`


const SignInMiddleBox: React.FC = () => {
  const handleRegisterClick = () => {
    window.location.href = "/signup";
  };

  return (
    <MiddleDownBox>
      <MiddleDownLeftFrameBox>
        <MiddleDownLeftTitleBox>
          <LeftTopSection>
            <LeftTopSectionIcon>👑</LeftTopSectionIcon>
            금주의 라이선스 랭킹
          </LeftTopSection>
          <LeftBottomSection>
            <LeftMarginContainer> </LeftMarginContainer>
            <LeftTextContainer>
              <LeftTextIcon>🥇</LeftTextIcon>
              <LeftTextComment>라이선스 따는 거북이</LeftTextComment>
            </LeftTextContainer>
            <LeftTextContainer>
              <LeftTextIcon>🥈</LeftTextIcon>
              <LeftTextComment>라이선스 따는 거북이</LeftTextComment>
            </LeftTextContainer>
            <LeftTextContainer>
              <LeftTextIcon>🥉</LeftTextIcon>
              <LeftTextComment>라이선스 따는 거북이</LeftTextComment>
            </LeftTextContainer>
            <LeftTextContainer>
              <LeftTextCount>4</LeftTextCount>
              <LeftTextComment>라이선스 따는 거북이</LeftTextComment>
            </LeftTextContainer>
            <LeftTextContainer>
              <LeftTextCount>5</LeftTextCount>
              <LeftTextComment>라이선스 따는 거북이</LeftTextComment>
            </LeftTextContainer>
            <LeftTextContainer>
              <LeftTextCount>6</LeftTextCount>
              <LeftTextComment>라이선스 따는 거북이</LeftTextComment>
            </LeftTextContainer>
            <LeftTextContainer>
              <LeftTextCount>7</LeftTextCount>
              <LeftTextComment>라이선스 따는 거북이</LeftTextComment>
            </LeftTextContainer>
            <LeftTextContainer>
              <LeftTextCount>8</LeftTextCount>
              <LeftTextComment>라이선스 따는 거북이</LeftTextComment>
            </LeftTextContainer>
            <LeftTextContainer>
              <LeftTextCount>9</LeftTextCount>
              <LeftTextComment>라이선스 따는 거북이</LeftTextComment>
            </LeftTextContainer>
            <LeftTextContainer>
              <LeftTextCount>10</LeftTextCount>
              <LeftTextComment>라이선스 따는 거북이</LeftTextComment>
            </LeftTextContainer>
          </LeftBottomSection>
        </MiddleDownLeftTitleBox>
      </MiddleDownLeftFrameBox>
      <MiddleDownRightFrameBox>
        <MiddleDownRightUpTitleBox>
          <RightUpTopSection>
            <RightUpTopSectionMargin>
              <></>
            </RightUpTopSectionMargin>
            공지 & 업데이트 사항
          </RightUpTopSection>
          <RightUpBottomSection>
            <RightUpTextContainer>
              · 2023-2학기 ESG 재능나눔봉사 프로그램 최종선발 안내
            </RightUpTextContainer>
            <RightUpTextContainer>
              · 2023학년도 제5차 생명윤리위원회 정규심의 일정 안내
            </RightUpTextContainer>
            <RightUpTextContainer>
              · 2023학년도 2학기 무료 특강, 토익 기초 문법 마스터[비교과]
            </RightUpTextContainer>
          </RightUpBottomSection>
        </MiddleDownRightUpTitleBox>
        <MiddleDownRightDownTitleBox>
          <RightDownTopSection>
            <RightDownTopSectionMargin>
              <></>
            </RightDownTopSectionMargin>
            신규 라이선스 안내
          </RightDownTopSection>
          <RightDownBottomSection>
            <RightDownTextContainer>
              <RightDownMajorBox>웹/프론트</RightDownMajorBox>
              <RightDownMajorText>오늘부터 나도 웹 개발자!</RightDownMajorText>
            </RightDownTextContainer>
            <RightDownTextContainer>
              <RightDownMajorBox>웹/프론트</RightDownMajorBox>
              <RightDownMajorText>오늘부터 나도 웹 개발자!</RightDownMajorText>
            </RightDownTextContainer>
            <RightDownTextContainer>
              <RightDownMajorBox>웹/프론트</RightDownMajorBox>
              <RightDownMajorText>오늘부터 나도 웹 개발자!</RightDownMajorText>
            </RightDownTextContainer>
            <RightDownTextContainer>
              <RightDownMajorBox>웹/프론트</RightDownMajorBox>
              <RightDownMajorText>오늘부터 나도 웹 개발자!</RightDownMajorText>
            </RightDownTextContainer>
          </RightDownBottomSection>
        </MiddleDownRightDownTitleBox>
      </MiddleDownRightFrameBox>
    </MiddleDownBox>
  );
};

const SignInMiddleDownScreen: React.FC = () => {
  const [userInfo, setUserInfo] = useState({});

  return (
    <SignInContainer>
      <SignInMiddleBox />
    </SignInContainer>
  );
};

export default SignInMiddleDownScreen;
