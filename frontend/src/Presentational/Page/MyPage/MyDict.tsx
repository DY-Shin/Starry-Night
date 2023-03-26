import React from 'react';
import * as MyStyle from '../../Components/MyComponents/MyStyle';
import MyDictSideBar from '../../Layout/MyLayout/MyDict/MyDictSideBar';
import MyDictMainBox from '../../Layout/MyLayout/MyDict/MyDictMainBox';
import MyGlobal from '../../Components/MyComponents/MyGlobalStyle';

function MyDict() {
  return (
    <MyStyle.Container>
      <MyGlobal />
      <MyDictSideBar />
      <MyDictMainBox />
    </MyStyle.Container>
  );
}

export default MyDict;
