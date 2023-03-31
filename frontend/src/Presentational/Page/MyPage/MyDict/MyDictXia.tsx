import React from 'react';
import MyDictXiaTop from '../../../Layout/MyLayout/MyDict/MyDictXiaTop';
import MyDictXiaBot from '../../../Layout/MyLayout/MyDict/MyDictXiaBot';
import * as Dictainer from '../../../Components/MyComponents/MyDictComponent/MyDictContainer';

function MyXia() {
  return (
    <Dictainer.DictItemBox>
      <MyDictXiaTop />
      <MyDictXiaBot />
    </Dictainer.DictItemBox>
  );
}

export default MyXia;
