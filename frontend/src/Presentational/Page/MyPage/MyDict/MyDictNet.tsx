import React from 'react';
import MyDictBei from '../../../Layout/MyLayout/MyDict/MyDictBei';
import MyDictQiuTop from '../../../Layout/MyLayout/MyDict/MyDictQiuTop';
import * as Dictainer from '../../../Components/MyComponents/MyDictComponent/MyDictContainer';

function MyNet() {
  return (
    <Dictainer.DictItemBox>
      <MyDictBei />
      <MyDictQiuTop />
    </Dictainer.DictItemBox>
  );
}

export default MyNet;
