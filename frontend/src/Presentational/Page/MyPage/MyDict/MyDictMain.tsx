import React from 'react';
import { Outlet, Routes, Route } from 'react-router-dom';
import * as MyStyle from '../../../Components/MyComponents/MyStyle';
import MyGlobal from '../../../Components/MyComponents/MyGlobalStyle';
import MyHeader from '../../../Layout/MyLayout/MyHeader';
import MyDictSideBar from '../../../Components/MyComponents/MyDictComponent/MyDictSideBar';
import * as Dictainer from '../../../Components/MyComponents/MyDictComponent/MyDictContainer';

function MyDict() {
  return (
    <MyStyle.Container>
      <MyGlobal />
      <MyHeader />
      <Dictainer.DictMainBox>
        <MyDictSideBar />
        <Outlet />
      </Dictainer.DictMainBox>
    </MyStyle.Container>
  );
}

export default MyDict;
