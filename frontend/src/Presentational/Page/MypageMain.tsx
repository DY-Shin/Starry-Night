import React from 'react';
import * as MyStyle from '../Components/MyComponents/MyStyle';
import MyHeader from '../Layout/MyLayout/MyHeader';
import MyProfile from './MyPage/MyProfile';
import MyGlobal from '../Components/MyComponents/MyGlobalStyle';
import MyDict from './MyPage/MyDict';

function Mypage() {
  return (
    <MyStyle.Mypage>
      <div className="Mypage">
        <MyGlobal />
        <MyProfile />
        <MyHeader />
        <MyDict />
      </div>
    </MyStyle.Mypage>
  );
}

export default Mypage;
