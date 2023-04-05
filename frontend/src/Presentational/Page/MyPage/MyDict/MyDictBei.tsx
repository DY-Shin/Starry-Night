import React from 'react';
import MyDictBei from '../../../Layout/MyLayout/MyDict/MyDictBei';
import * as Dictainer from '../../../Components/MyComponents/MyDictComponent/MyDictContainer';
import * as MyStyle from '../../../Components/MyComponents/MyStyle';
import MyGlobal from '../../../Components/MyComponents/MyGlobalStyle';
import MyHeader from '../../../Layout/MyLayout/MyHeader';
import MyDictSideBar from '../../../Components/MyComponents/MyDictComponent/MyDictSideBar';

function MyBei() {
  return (
    <MyStyle.Container>
      <MyGlobal />
      <MyHeader />
      <Dictainer.DictMainBox>
        <MyDictSideBar />
        <Dictainer.DictItemBox>
          <MyDictBei />
        </Dictainer.DictItemBox>
      </Dictainer.DictMainBox>
    </MyStyle.Container>
  );
}

export default MyBei;
