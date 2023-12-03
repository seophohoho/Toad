import styled from "styled-components";

const LicenseviewContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: #fff;
`;

const Licenseview_TopBox = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: #fff;
`;

const Licenseview_MiddleUpBox = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: #a2cf68;
`;

const Licenseview_MiddleBox = styled.div`
  flex-grow: 1; /* 미들 박스가 남은 공간을 모두 차지하도록 설정 */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: #efefef;
`;



export {
  LicenseviewContainer,
  Licenseview_TopBox,
  Licenseview_MiddleUpBox,
  Licenseview_MiddleBox
};
