import React, { useState, useEffect } from "react";
import axios from "axios";
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
  padding: 8px;
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
  padding: 8px;
  border-radius: 5px;
`;

const ListItem = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  text-align: center;
  border-bottom: 1px solid #8f8f8f;
`;

const ListBox = styled.div`
  width: 1200px;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid #8f8f8f;
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
  text-align: center;
`;

const ListBoxBottomSection = styled.div`
  width: calc(100% - 2px);
  height: calc(100% - 52px);
  background-color: #efefef;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  overflow-y: auto;
`;

const ProblemItem = ({ problem }) => {
  const { category, title, solvecount, date} = problem;

  return (
    <ListItem>
      <FieldCell>{category}</FieldCell>
      <TitleCell>{title}</TitleCell>
      <CountCell>{solvecount}</CountCell>
      <DateCell>{date}</DateCell>
    </ListItem>
  );
  
}

const sampleProblem = {
  category: '분야',
  title: '제목',
  solvecount: 'n',
  date: 'xxxx.xx.xx'
}

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


const LicenseMiddleBoxComponent: React.FC = () => {
  const [problems, setProblems] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("");
        setProblems(response.data.problems);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  if(loading) {
    return <ListBoxBottomSection>대기 중...</ListBoxBottomSection>;
  }
  if(!problems) {
    return (
      <License_MiddleBox>
        <MiddleFrameBox>
          <SearchBox>
            <SearchField>분야</SearchField>
            <SearchDropdown>
              <option value="웹/프론트">웹/프론트</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
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
              <ProblemItem problem={sampleProblem} />
              <ProblemItem problem={sampleProblem} />
              <ProblemItem problem={sampleProblem} />
              <ProblemItem problem={sampleProblem} />
              <ProblemItem problem={sampleProblem} />
              <ProblemItem problem={sampleProblem} />
              <ProblemItem problem={sampleProblem} />
              <ProblemItem problem={sampleProblem} />
              <ProblemItem problem={sampleProblem} />
              <ProblemItem problem={sampleProblem} />
              <ProblemItem problem={sampleProblem} />
              <ProblemItem problem={sampleProblem} />
              <ProblemItem problem={sampleProblem} />
            </ListBoxBottomSection>
          </ListBox>
        </MiddleFrameBox>
      </License_MiddleBox>
    );
  }

  return (
    <License_MiddleBox>
      <MiddleFrameBox>
        <SearchBox>
          <SearchField>분야</SearchField>
          <SearchDropdown>
            <option value="웹/프론트">웹/프론트</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
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
            {problems.map((problem) => (
              <ProblemItem key={problem.title} problem={problem} />
            ))}
          </ListBoxBottomSection>
        </ListBox>
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