import { NextPage } from "next";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
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
        const handleUserInfoButtonClick = async () => {
            try {
                //서버의 회원 정보를 가져오는 요청
                const response = await axios.get('http://api/user-info');
                console.log('회원 정보:', response.data);
            } catch (error) {
                console.error('회원 정보를 가져오는 중 에러 발생:', error);
            }
        };
    
        return (
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
                        <Link href="/mypageinfo">
                            <MPProfileButton onClick={handleUserInfoButtonClick}>
                                <MPProfileLabel>회원 정보</MPProfileLabel>
                            </MPProfileButton>
                        </Link>
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