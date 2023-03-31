import React from 'react';
import MyDictQiuTop from '../../../Layout/MyLayout/MyDict/MyDictQiuTop';
import MyDictQiuBot from '../../../Layout/MyLayout/MyDict/MyDictQiuBot';
import * as Dictainer from '../../../Components/MyComponents/MyDictComponent/MyDictContainer';
import * as MyStyle from '../../../Components/MyComponents/MyStyle';
import MyGlobal from '../../../Components/MyComponents/MyGlobalStyle';
import MyHeader from '../../../Layout/MyLayout/MyHeader';
import MyDictSideBar from '../../../Components/MyComponents/MyDictComponent/MyDictSideBar';

function MyQiu() {
  return (
    <MyStyle.Container>
      <MyGlobal />
      <MyHeader />
      <Dictainer.DictMainBox>
        <MyDictSideBar />
        <Dictainer.DictItemBox>
          <MyDictQiuTop />
          <MyDictQiuBot />
        </Dictainer.DictItemBox>
      </Dictainer.DictMainBox>
    </MyStyle.Container>
  );
}

export default MyQiu;
