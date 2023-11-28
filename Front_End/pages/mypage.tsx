import { NextPage } from "next";
import { useState, useEffect } from 'react';
import {  MyPageAll,
    MyPageTop,
    MyPageList,
    MPImage,
    MPToadLabel,
    LicenseLabel,
    PublicProfileLabel,
    MPMyPageLabel,
    MPProfileButton,
    MPProfileLabel,
    BookmarkLabel,
    EditProfileLabel,
    ProfileQuit,
    MPProfileBox
}
    from  '@/styles/MyPageStyle'

    const MyPage: NextPage = () => {
        return(
            <>
            <MyPageAll>
                <MyPageTop>
                    <MPImage></MPImage>
                    <MPToadLabel>Toad</MPToadLabel>
                    <LicenseLabel>라이선스 취득</LicenseLabel>
                    <PublicProfileLabel>공개 명함</PublicProfileLabel>
                    <MPMyPageLabel>마이페이지</MPMyPageLabel>
                </MyPageTop>
                <MyPageList>
                    <MPProfileButton>
                        <MPProfileLabel>회원 정보</MPProfileLabel>
                    </MPProfileButton>
                    <BookmarkLabel>북마크</BookmarkLabel>
                    <EditProfileLabel>명함 수정</EditProfileLabel>
                    <ProfileQuit>회원 탈퇴</ProfileQuit>
                </MyPageList>
                <MPProfileBox>
                    
                </MPProfileBox>
            </MyPageAll>
            </>

        );
      };
      
      export default MyPage;