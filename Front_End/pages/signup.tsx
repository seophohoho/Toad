import SignupScreen from "@/pages/signup";

import { NextPage } from "next";
import { useState, useEffect } from 'react';
import Button from "./_app";
import React from "react";
import { useDropzone } from "react-dropzone";
import { useNavigate } from 'react-router-dom';
import Link from 'next/link';





import {   TodAll,
  TodImage,
  TodLabel,
  TodSignUp,
  TodInfo,
  SignUpLabel,
  InfoLabel,
  TodMain,
  SignupInfo,
  TodId,
  IdLabel,
  IdInput,
  TodName,
  NameLabel,
  NameInput,
  TodPhoneEmail,
  PhoneLabel,
  PhoneInput,
  EmailLabel,
  EmailInput,
  TodPassword,
  PasswordLabel,
  PasswordInput,
  PasswordVisible,
  PasswordInputRe,
  PasswordVisibleRe,
  AllCheckBox,
  AllCheckBoxLabel,
  TodLine,
  FirstCheckBox,
  FirstCheckBoxLabel,
  SecondCheckBox,
  SecondCheckBoxLabel,
  Regi,
  RegiLabel,
  BottomButton,
  SignUpTop

 } from "@/styles/SignUpStyle";


// 회원가입 페이지
const SignUp: NextPage = () => {
  // 초기값 세팅 - 아이디, 이름, 휴대폰번호, 이메일, 비밀번호, 비밀번호확인
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [agree1, setAgree1] = useState(false);
  const [agree2, setAgree2] = useState(false);
  const isAgreedAll = agree1 && agree2;
  const ClickRegi = () => {
    if (!id || !name || !phone || !email || !password || !passwordConfirm || !isAgreedAll){
      alert("모든 필드를 입력하고 동의해야 합니다.");
      return;
    }

    if (isId && isname && isPhone && isEmail && isPassword && isPasswordConfirm && isAgreedAll){
      window.location.href = '/Info?id=${id}&name=${name}&phone=${phone}&email=${email}&password=${password}';
    } else {
      alert("유효성 검사 또는 동의 여부가 충족되지 않습니다.");
    }
  };
 


  // 오류메세지 상태 저장
  const [idMessage, setIdMessage] = useState("");
  const [nameMessage, setNameMessage] = useState("");
  const [phoneMessage, setPhoneMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");

  // 유효성 검사
  const [isId, setIsId] = useState(false);
  const [isname, setIsName] = useState(false);
  const [isPhone, setIsPhone] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentId = e.target.value;
    setId(currentId);
    const idRegExp = /^[a-zA-z0-9]{4,12}$/;

    if (!idRegExp.test(currentId)) {
      setIdMessage("4-12사이 대소문자 또는 숫자만 입력해 주세요!");
      setIsId(false);
    } else {
      setIdMessage("사용가능한 아이디 입니다.");
      setIsId(true);
    }
  };

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentName = e.target.value;
    setName(currentName);

    if (currentName.length < 2 || currentName.length > 5) {
      setNameMessage("닉네임은 2글자 이상 5글자 이하로 입력해주세요!");
      setIsName(false);
    } else {
      setNameMessage("사용가능한 닉네임 입니다.");
      setIsName(true);
    }
  };

  const onChangePhone = (getNumber: string) => {
    const currentPhone = getNumber;
    setPhone(currentPhone);
    const phoneRegExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

    if (!phoneRegExp.test(currentPhone)) {
      setPhoneMessage("올바른 형식이 아닙니다!");
      setIsPhone(false);
    } else {
      setPhoneMessage("사용 가능한 번호입니다:-)");
      setIsPhone(true);
    }
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);
    const emailRegExp =
      /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;

    if (!emailRegExp.test(currentEmail)) {
      setEmailMessage("이메일의 형식이 올바르지 않습니다!");
      setIsEmail(false);
    } else {
      setEmailMessage("사용 가능한 이메일 입니다.");
      setIsEmail(true);
    }
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentPassword = e.target.value;
    setPassword(currentPassword);
    const passwordRegExp =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (!passwordRegExp.test(currentPassword)) {
      setPasswordMessage(
        "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
      );
      setIsPassword(false);
    } else {
      setPasswordMessage("안전한 비밀번호 입니다.");
      setIsPassword(true);
    }
  };

  const onChangePasswordConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentPasswordConfirm = e.target.value;
    setPasswordConfirm(currentPasswordConfirm);
    if (password !== currentPasswordConfirm) {
      setPasswordConfirmMessage("입력한 비밀번호가 다릅니다.");
      setIsPasswordConfirm(false);
    } else {
      setPasswordConfirmMessage("똑같은 비밀번호를 입력했습니다.");
      setIsPasswordConfirm(true);
    }
  };
  const handleCheckAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setAgree1(e.target.checked);
    setAgree2(e.target.checked);
  };

  return (
    <>
    <TodAll>
      <TodImage/>
        <TodLabel>TOD</TodLabel>
        <SignUpTop>
        <TodSignUp>
          <SignUpLabel>회원가입</SignUpLabel>
        </TodSignUp>
        <TodInfo >
          <InfoLabel>상세정보기입</InfoLabel>
        </TodInfo>
        </SignUpTop>

      <TodMain>
        <SignupInfo>
          <TodId>
            <IdLabel>아이디</IdLabel>
            <IdInput id="id" name="id" value={id} onChange={onChangeId}/>
            
          </TodId>
          <TodName>
            <NameLabel>이름</NameLabel>
            <NameInput id="name" name="name" value={name} onChange={onChangeName}/>
            
          </TodName>
          <TodPhoneEmail>
            <PhoneLabel>휴대폰</PhoneLabel>
            <PhoneInput id="phone" name="phone" value={phone} onChange={(e) => onChangePhone(e.target.value)} />
            

            <EmailLabel>이메일</EmailLabel>
            <EmailInput id="email"
           name="name"
           value={email}
           onChange={onChangeEmail}
         />
         

          </TodPhoneEmail>
          <TodPassword>
            <PasswordLabel>비밀번호</PasswordLabel>
            <PasswordInput id="password"
           name="password"
           value={password}
           type="password"
           onChange={onChangePassword}
         />

          </TodPassword>
          
          <PasswordInputRe id="passwordConfirm"
           name="passwordConfirm"
           value={passwordConfirm}
           type="password"
           onChange={onChangePasswordConfirm}
         />
         
        </SignupInfo>
        
        <AllCheckBox type="checkbox"
            name="total_agree"
            value="total_agree"
            checked={isAgreedAll}
            onChange={handleCheckAll}
          />
          <AllCheckBoxLabel>전체 동의</AllCheckBoxLabel>
        <TodLine></TodLine>
        <FirstCheckBox type="checkbox"
            name="agree1"
            value="agree1"
            checked={agree1}
            onChange={(e) => setAgree1(e.target.checked)}
          />
          <FirstCheckBoxLabel>이용약관 동의*</FirstCheckBoxLabel>
        <SecondCheckBox type="checkbox"
            name="agree2"
            value="agree2"
            checked={agree2}
            onChange={(e) => setAgree2(e.target.checked)}
          />
          <SecondCheckBoxLabel>프로그래머스 개인정보 수집 및 이용 동의</SecondCheckBoxLabel>
        
        <Regi onClick={ClickRegi}>
          <RegiLabel>등록</RegiLabel>
          <Link href={`/Info?id=${id}&name=${name}&phone=${phone}&email=${email}&password=${password}`} passHref>
          </Link>
        </Regi>
          
      </TodMain>
      <BottomButton>이용약관  |  개인정보처리방침</BottomButton>
    </TodAll>
    </>
  );
  };

export default SignUp;


