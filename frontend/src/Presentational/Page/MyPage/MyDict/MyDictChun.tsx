import React from 'react';
import MyDictChunTop from '../../../Layout/MyLayout/MyDict/MyDictChunTop';
import MyDictChunBot from '../../../Layout/MyLayout/MyDict/MyDictChunBot';
import * as Dictainer from '../../../Components/MyComponents/MyDictComponent/MyDictContainer';
import * as MyStyle from '../../../Components/MyComponents/MyStyle';
import MyGlobal from '../../../Components/MyComponents/MyGlobalStyle';
import MyHeader from '../../../Layout/MyLayout/MyHeader';
import MyDictSideBar from '../../../Components/MyComponents/MyDictComponent/MyDictSideBar';

function MyChun() {
  return (
    <MyStyle.Container>
      <MyGlobal />
      <MyHeader />
      <Dictainer.DictMainBox>
        <MyDictSideBar />
        <Dictainer.DictItemBox>
          <MyDictChunTop />
          <MyDictChunBot />
        </Dictainer.DictItemBox>
      </Dictainer.DictMainBox>
    </MyStyle.Container>
  );
}

export default MyChun;
