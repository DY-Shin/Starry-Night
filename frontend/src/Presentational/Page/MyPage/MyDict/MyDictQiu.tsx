import React from 'react';
import MyDictQiuTop from '../../../Layout/MyLayout/MyDict/MyDictQiuTop';
import MyDictQiuBot from '../../../Layout/MyLayout/MyDict/MyDictQiuBot';
import * as Dictainer from '../../../Components/MyComponents/MyDictComponent/MyDictContainer';

function MyQiu() {
  return (
    <Dictainer.DictItemBox>
      <MyDictQiuTop />
      <MyDictQiuBot />
    </Dictainer.DictItemBox>
  );
}

export default MyQiu;
