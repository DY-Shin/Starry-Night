import React from 'react';
import MyDictDongTop from '../../../Layout/MyLayout/MyDict/MyDictDongBot';
import MyDictDongBot from '../../../Layout/MyLayout/MyDict/MyDictDongTop';
import * as Dictainer from '../../../Components/MyComponents/MyDictComponent/MyDictContainer';
import * as MyStyle from '../../../Components/MyComponents/MyStyle';
import MyGlobal from '../../../Components/MyComponents/MyGlobalStyle';
import MyHeader from '../../../Layout/MyLayout/MyHeader';
import MyDictSideBar from '../../../Components/MyComponents/MyDictComponent/MyDictSideBar';

function MyDong() {
  return (
    <MyStyle.Container>
      <MyGlobal />
      <MyHeader />
      <Dictainer.DictMainBox>
        <MyDictSideBar />
        <Dictainer.DictItemBox>
          <MyDictDongTop />
          <MyDictDongBot />
        </Dictainer.DictItemBox>
      </Dictainer.DictMainBox>
    </MyStyle.Container>
  );
}

export default MyDong;
