import React from 'react';
import MyDictBei from '../../../Layout/MyLayout/MyDict/MyDictBei';
import * as Dictainer from '../../../Components/MyComponents/MyDictComponent/MyDictContainer';

function MyBei() {
  return (
    <Dictainer.DictItemBox>
      <MyDictBei />
    </Dictainer.DictItemBox>
  );
}

export default MyBei;
