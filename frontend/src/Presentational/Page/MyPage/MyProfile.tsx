import React from 'react';
import { Link } from 'react-router-dom';
import * as MyStyle from '../../Components/MyComponents/MyStyle';
import MyGlobal from '../../Components/MyComponents/MyGlobalStyle';
// import MyHeader from '../../Layout/MyLayout/MyHeader';

function MyProfile() {
  return (
    <MyStyle.Container>
      <MyGlobal />
      <div className="MyProfile">
        <h1>MyProfile</h1>
        <MyStyle.MyButton>
          <Link to="/mypage/dict">나의 도감</Link>
        </MyStyle.MyButton>
        <MyStyle.MyButton>
          <Link to="/mypage/posts">내가 쓴 글</Link>
        </MyStyle.MyButton>
        <MyStyle.MyButton>
          <Link to="/mypage/reward">나의 업적</Link>
        </MyStyle.MyButton>
      </div>
    </MyStyle.Container>
  );
}

export default MyProfile;
