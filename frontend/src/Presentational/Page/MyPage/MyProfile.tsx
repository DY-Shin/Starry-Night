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
            <MyStyle.MyButton>
              <Link to="/mypage/dict">나의 도감</Link>
            </MyStyle.MyButton>
            <MyProfileBox.MyProfileContent>
              <h1>23/60</h1>
            </MyProfileBox.MyProfileContent>
          </MyProfileBox.ProfileButtonContainer>
          <MyProfileBox.ProfileButtonContainer>
            <MyStyle.MyButton>
              <Link to="/mypage/posts">내가 쓴 글 </Link>
            </MyStyle.MyButton>
            <MyProfileBox.MyProfileContent>
              <h1>123개</h1>
            </MyProfileBox.MyProfileContent>
          </MyProfileBox.ProfileButtonContainer>
          <MyProfileBox.ProfileButtonContainer>
            <MyStyle.MyButton>
              <Link to="/mypage/reward">나의 업적</Link>
            </MyStyle.MyButton>
            <MyProfileBox.MyProfileContent>
              <h1>2/8</h1>
            </MyProfileBox.MyProfileContent>
          </MyProfileBox.ProfileButtonContainer>
        </MyProfileBox.ProfileSubContainer>
      </MyProfileBox.ProfileMainContainer>
    </MyStyle.Container>
  );
}

export default MyProfile;
