import SignInMiddleScreen from "@/component/signin/SignInMiddleBox";
import SignInMiddleDownScreen from "@/component/signin/SignInMiddleDownBox";
import SignInMiddleUpScreen from "@/component/signin/SignInMiddleUpBox";
import SignInTopScreen from "@/component/signin/SignInTopBox";
import {
  SignInContainer,
  SignIn_MiddleBox,
  SignIn_MiddleDownBox,
  SignIn_MiddleUpBox,
  SignIn_TopBox
} from "@/styles/SignInStyle";

const SignIn = function () {
  return (
    <SignInContainer>
      <SignIn_TopBox>
        <>
          <SignInTopScreen />
        </>
      </SignIn_TopBox>
      <SignIn_MiddleUpBox>
        <SignInMiddleUpScreen/>
      </SignIn_MiddleUpBox>
      <SignIn_MiddleBox>
        <SignInMiddleScreen />
      </SignIn_MiddleBox>
      <SignIn_MiddleDownBox>
        <SignInMiddleDownScreen />
      </SignIn_MiddleDownBox>
    </SignInContainer>
  );
};

export default SignIn;
