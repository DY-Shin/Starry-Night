import React from 'react';
import MyDictChunTop from '../../../Layout/MyLayout/MyDict/MyDictChunTop';
import MyDictChunBot from '../../../Layout/MyLayout/MyDict/MyDictChunBot';
import * as Dictainer from '../../../Components/MyComponents/MyDictComponent/MyDictContainer';

function MyChun() {
  return (
    <Dictainer.DictItemBox>
      <MyDictChunTop />
      <MyDictChunBot />
    </Dictainer.DictItemBox>
  );
}

export default MyChun;
