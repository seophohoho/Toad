import styled from "styled-components";

const SignInContainer = styled.div`
  width: 100%;
  height: 100%;

  padding: 0px 0 155px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background: #fff;
`;

const SignIn_TopBox = styled.div`
  width: 1200px;
  height: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  background: #fff;
`;

const SignIn_MiddleUpBox = styled.div`
  width: 100%;
  height: 400px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  background: #efefef;
`;

const SignIn_MiddleBox = styled.div`
  width: 100%;
  height: 180px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  background: #a2cf68;
`;
const SignIn_MiddleDownBox = styled.div`
  width: 100%;
  height: 1000px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  order: 1;
  background: #efefef;
`;
export {
  SignInContainer,
  SignIn_TopBox,
  SignIn_MiddleUpBox,
  SignIn_MiddleBox,
  SignIn_MiddleDownBox
};
