import LicenseTopScreen from "@/component/license/LicenseTopBox";
import LicenseMiddleUpScreen from "@/component/license/LicenseMiddleUpBox";
import LicenseMiddleScreen from "@/component/license/LicenseMiddleBox";



import {
  LicenseContainer,
  License_MiddleBox,
  License_MiddleUpBox,
  License_TopBox
} from "@/styles/LicenseStyle";

const License = function () {
  return (
    <LicenseContainer>
      <License_TopBox>
        <LicenseTopScreen></LicenseTopScreen>
      </License_TopBox>
      <License_MiddleUpBox>
        <LicenseMiddleUpScreen></LicenseMiddleUpScreen>
      </License_MiddleUpBox>
      <License_MiddleBox>
        <LicenseMiddleScreen></LicenseMiddleScreen>
      </License_MiddleBox>
    </LicenseContainer>
  );
};

export default License;
