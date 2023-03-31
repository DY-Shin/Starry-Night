import React from 'react';
import Auriga from '../../../../MyAssets/symbols/Auriga';
import CanisMajor from '../../../../MyAssets/symbols/CanisMajor';
import CanisMinor from '../../../../MyAssets/symbols/CanisMinor';

import Orion from '../../../../MyAssets/symbols/Orion';
import Taurus from '../../../../MyAssets/symbols/Taurus';
import * as Dictainer from '../../../Components/MyComponents/MyDictComponent/MyDictContainer';

function MyDictDongTop() {
  return (
    <Dictainer.DictSubBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrPhoto>
          <CanisMajor />
        </Dictainer.BjrPhoto>
        <Dictainer.BjrName>큰개자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrPhoto>
          <Auriga />
        </Dictainer.BjrPhoto>
        <Dictainer.BjrName>마차부자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrPhoto>
          <Orion />
        </Dictainer.BjrPhoto>
        <Dictainer.BjrName>오리온자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrPhoto>
          <CanisMinor />
        </Dictainer.BjrPhoto>
        <Dictainer.BjrName>작은개자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrPhoto>
          <Taurus />
        </Dictainer.BjrPhoto>
        <Dictainer.BjrName>황소자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
    </Dictainer.DictSubBox>
  );
}

export default MyDictDongTop;
