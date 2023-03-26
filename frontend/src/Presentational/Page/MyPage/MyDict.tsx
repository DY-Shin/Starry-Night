import React from 'react';
import * as MyStyle from '../../Components/MyComponents/MyStyle';
import MyDictSideBar from '../../Layout/MyLayout/MyDict/MyDictSideBar';
import MyDictMainBox from '../../Layout/MyLayout/MyDict/MyDictMainBox';
import MyGlobal from '../../Components/MyComponents/MyGlobalStyle';
import MyHeader from '../../Layout/MyLayout/MyHeader';

function MyDict() {
  return (
    <MyStyle.Container>
      <MyGlobal />
      <MyHeader />
      <MyDictSideBar />
      <MyDictMainBox />
    </MyStyle.Container>
  );
}

export default MyDict;
