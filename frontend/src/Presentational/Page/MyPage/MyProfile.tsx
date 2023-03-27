import React from 'react';
import { Link } from 'react-router-dom';
import * as MyStyle from '../../Components/MyComponents/MyStyle';
import MyGlobal from '../../Components/MyComponents/MyGlobalStyle';
import * as MyProfileBox from '../../Components/MyComponents/MyProfileComponent/MyProfileBox';
// import MyHeader from '../../Layout/MyLayout/MyHeader';

function MyProfile() {
  return (
    <MyStyle.Container>
      <MyGlobal />
      <MyProfileBox.ProfileMainContainer>
        <MyProfileBox.ProfileSubContainer>
          <MyProfileBox.Photo>
            <h1>hi</h1>
          </MyProfileBox.Photo>
          <MyProfileBox.Nick>
            <h1>hello</h1>
          </MyProfileBox.Nick>
        </MyProfileBox.ProfileSubContainer>
        <MyProfileBox.ProfileSubContainer>
          <MyProfileBox.ProfileButtonContainer>
            <Link to="/mypage/dict">나의 도감</Link>
          </MyProfileBox.ProfileButtonContainer>
          <MyProfileBox.ProfileButtonContainer>
            <Link to="/mypage/posts">내가 쓴 글 </Link>
          </MyProfileBox.ProfileButtonContainer>
          <MyProfileBox.ProfileButtonContainer>
            <Link to="/mypage/reward">나의 업적</Link>
          </MyProfileBox.ProfileButtonContainer>
        </MyProfileBox.ProfileSubContainer>
      </MyProfileBox.ProfileMainContainer>
    </MyStyle.Container>
  );
}

export default MyProfile;
