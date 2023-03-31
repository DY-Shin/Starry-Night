import React from 'react';
import MyDictSolTop from '../../../Layout/MyLayout/MyDict/MyDictSolTop';
import MyDictSolBot from '../../../Layout/MyLayout/MyDict/MyDictSolBot';
import * as Dictainer from '../../../Components/MyComponents/MyDictComponent/MyDictContainer';

function MySol() {
  return (
    <Dictainer.DictItemBox>
      <MyDictSolTop />
      <MyDictSolBot />
    </Dictainer.DictItemBox>
  );
}

export default MySol;
