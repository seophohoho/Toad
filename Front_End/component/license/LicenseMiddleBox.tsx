import React, { useState } from "react";
import styled from "styled-components";
import { LicenseContainer } from "@/styles/LicenseStyle";

const License_MiddleBox = styled.div`
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

const SearchBox = styled.div`
  width: 1200px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 70px;
  margin-bottom: 70px;
  border-radius: 10px;
  background-color: #cce3a2;
`;

const SearchField = styled.div`
  margin-left: 40px;
  font-size: 15px;
  font-weight: bold;
  color: #000;
`;

const SearchDropdown = styled.select`
  width: 250px;
  margin-left: 20px;
  padding: 8px; /* 수정: 크기 조절 */
  border-radius: 5px;
`;

const KindText = styled.div`
  margin-left: 50px;
  font-size: 15px;
  font-weight: bold;
  color: #000;
`;

const KindDropdown = styled.select`
  width: 250px;
  margin-left: 20px;
  padding: 8px; /* 수정: 크기 조절 */
  border-radius: 5px;
`;



const ListItem = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  text-align: center;
  border-bottom: 1px solid #8f8f8f; /* 추가: 각 항목에 세로 테두리 스타일 */
`;

const ListBox = styled.div`
  width: 1200px;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid #8f8f8f; /* 추가: 테두리 스타일 */
`;


const ListBoxTopSection = styled.div`
  width: calc(100% - 20px);
  height: 50px;
  background-color: #dfdfdf;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  color: #000;
  font-weight: bold;
  font-size: 15px;
  text-align: center; /* 수정: 중앙 정렬 */
`;

const ListBoxBottomSection = styled.div`
  width: calc(100% - 2px); /* 수정: 테두리 고려하여 너비 조절 */
  height: calc(100% - 52px); /* 수정: 테두리 고려하여 높이 조절 */
  background-color: #efefef;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  overflow-y: auto;

  /* 추가: 마지막 항목의 테두리 제거 */
  ${ListItem}:last-child {
    border-bottom: none;
  }
`;

const FieldCell = styled.div`
  width: 150px;
  font-size: 15px;
  color: #000;
`;

const TitleCell = styled.div`
  width: 550px;
  font-size: 15px;
  margin-left: 50px;
  margin-right: 50px;
  color: #000;
  font-weight: bold;
`;

const CountCell = styled.div`
  width: 100px;
  font-size: 15px;
  margin-left: 25px;
  margin-right: 25px;
  color: #000;
  margin-right: 10px;
`;

const DateCell = styled.div`
  width: 125px;
  font-size: 15px;
  margin-right: 25px;
  color: #000;
  margin-left: auto;
  margin-right: 5px;
`;

const PageButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const PageButtons = styled.div`
  display: flex;
  align-items: center;

  button {
    margin: 0 5px;
    padding: 5px 10px;
    color: #000;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
  }
`;

const LicenseMiddleBoxComponent: React.FC = () => {
    const [page, setPage] = useState(1);
    const [selectedField, setSelectedField] = useState("웹/프론트"); // 초기값 설정
    const itemsPerPage = 15;
    const totalItems = 30;
  
    const items = Array.from({ length: totalItems }, (_, index) => ({
      id: index,
      field: `웹/프론트`,
      title: `오늘부터는 나도 웹 개발자!`,
      count: Math.floor(Math.random() * 100),
      date: new Date().toLocaleDateString(),
    }));
  
    const filteredItems = items.filter(
      (item) => item.field === selectedField
    );
  
    const currentItems = filteredItems.slice((page - 1) * itemsPerPage, page * itemsPerPage);

    const renderPageButtons = () => {
      // ... (이전 코드와 동일)
    };
  
    return (
    <License_MiddleBox>
      <MiddleFrameBox>
        <SearchBox>
          <SearchField>분야</SearchField>
          <SearchDropdown
            value={selectedField}
            onChange={(e) => setSelectedField(e.target.value)}
          >
            <option value="웹/프론트">웹/프론트</option>
            <option value="웹/백엔드">웹/백엔드</option>
            <option value="웹/디자인">웹/디자인</option>
            <option value="웹/기획자">웹/기획자</option>
          </SearchDropdown>
        </SearchBox>
        <ListBox>
          <ListBoxTopSection>
            <FieldCell>분야</FieldCell>
            <TitleCell>제목</TitleCell>
            <CountCell>취득한 사람 수</CountCell>
            <DateCell>등록일</DateCell>
          </ListBoxTopSection>
          <ListBoxBottomSection>
            {currentItems.map((item) => (
              <ListItem key={item.id}>
                <FieldCell>{item.field}</FieldCell>
                <TitleCell style={{ textAlign: 'left' }}>{item.title}</TitleCell>
                <CountCell style={{ textAlign: 'right' }}>{item.count}</CountCell>
                <DateCell>{item.date}</DateCell>
              </ListItem>
            ))}
          </ListBoxBottomSection>
        </ListBox>
        {currentItems.length >= itemsPerPage && (
          <PageButtonsContainer>
            <PageButtons>
              {renderPageButtons()}
            </PageButtons>
          </PageButtonsContainer>
        )}
      </MiddleFrameBox>
    </License_MiddleBox>
  );
};

const LicenseMiddleScreen: React.FC = () => {
  const [userInfo, setUserInfo] = useState({});

  return (
    <LicenseContainer>
      <LicenseMiddleBoxComponent />
    </LicenseContainer>
  );
};

export default LicenseMiddleScreen;
