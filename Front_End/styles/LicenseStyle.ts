import styled from "styled-components";

const LicenseContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: #fff;
`;

const License_TopBox = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: #fff;
`;

const License_MiddleUpBox = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: #a2cf68;
`;

const License_MiddleBox = styled.div`
  flex-grow: 1; /* 미들 박스가 남은 공간을 모두 차지하도록 설정 */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: #efefef;
`;

export {
  LicenseContainer,
  License_TopBox,
  License_MiddleUpBox,
  License_MiddleBox
};
