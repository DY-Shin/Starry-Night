import React from 'react';
import * as MyStyle from '../../Components/MyComponents/MyStyle';
import MyDictBei from '../../Layout/MyLayout/MyDict/MyDictBei';
import MyGlobal from '../../Components/MyComponents/MyGlobalStyle';
import MyHeader from '../../Layout/MyLayout/MyHeader';
import MyDictSideBar from '../../Components/MyComponents/MyDictComponent/MyDictSideBar';
import * as Dictainer from '../../Components/MyComponents/MyDictComponent/MyDictContainer';

function MyDict() {
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

export default MyDict;
