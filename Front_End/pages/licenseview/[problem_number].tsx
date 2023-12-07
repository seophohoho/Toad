import LicenseviewTopScreen from "@/component/licenseview/LicenseviewTopBox";
import LicenseviewMiddleUpScreen from "@/component/licenseview/LicenseviewMiddleUpBox";
import LicenseviewMiddleScreen from "@/component/licenseview/LicenseviewMiddleBox";



import {
  LicenseviewContainer,
  Licenseview_MiddleBox,
  Licenseview_MiddleUpBox,
  Licenseview_TopBox
} from "@/styles/LicenseviewStyle";

const Licenseview = function () {
  return (
    <LicenseviewContainer>
      <Licenseview_TopBox>
        <LicenseviewTopScreen></LicenseviewTopScreen>
      </Licenseview_TopBox>
      <Licenseview_MiddleUpBox>
        <LicenseviewMiddleUpScreen></LicenseviewMiddleUpScreen>
      </Licenseview_MiddleUpBox>
      <Licenseview_MiddleBox>
        <LicenseviewMiddleScreen></LicenseviewMiddleScreen>
      </Licenseview_MiddleBox>
    </LicenseviewContainer>
  );
};

export default Licenseview;
