import React from 'react';
import MyDictXiaTop from '../../../Layout/MyLayout/MyDict/MyDictXiaTop';
import MyDictXiaBot from '../../../Layout/MyLayout/MyDict/MyDictXiaBot';
import * as Dictainer from '../../../Components/MyComponents/MyDictComponent/MyDictContainer';
import * as MyStyle from '../../../Components/MyComponents/MyStyle';
import MyGlobal from '../../../Components/MyComponents/MyGlobalStyle';
import MyHeader from '../../../Layout/MyLayout/MyHeader';
import MyDictSideBar from '../../../Components/MyComponents/MyDictComponent/MyDictSideBar';

function MyXia() {
  return (
    <MyStyle.Container>
      <MyGlobal />
      <MyHeader />
      <Dictainer.DictMainBox>
        <MyDictSideBar />
        <Dictainer.DictItemBox>
          <MyDictXiaTop />
          <MyDictXiaBot />
        </Dictainer.DictItemBox>
      </Dictainer.DictMainBox>
    </MyStyle.Container>
  );
}

export default MyXia;
