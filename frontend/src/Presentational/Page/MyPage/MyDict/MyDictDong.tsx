import React from 'react';
import MyDictDongTop from '../../../Layout/MyLayout/MyDict/MyDictDongBot';
import MyDictDongBot from '../../../Layout/MyLayout/MyDict/MyDictDongTop';
import * as Dictainer from '../../../Components/MyComponents/MyDictComponent/MyDictContainer';

function MyDong() {
  return (
    <Dictainer.DictItemBox>
      <MyDictDongTop />
      <MyDictDongBot />
    </Dictainer.DictItemBox>
  );
}

export default MyDong;
