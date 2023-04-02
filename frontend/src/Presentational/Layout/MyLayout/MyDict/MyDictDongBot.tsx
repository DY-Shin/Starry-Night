import React from 'react';
import Auriga from '../../../../Assets/Mypage/symbols/Auriga';
import CanisMajor from '../../../../Assets/Mypage/symbols/CanisMajor';
import CanisMinor from '../../../../Assets/Mypage/symbols/CanisMinor';

import Orion from '../../../../Assets/Mypage/symbols/Orion';
import Taurus from '../../../../Assets/Mypage/symbols/Taurus';
import * as Dictainer from '../../../Components/MyComponents/MyDictComponent/MyDictContainer';

function MyDictDongTop() {
  return (
    <Dictainer.DictSubBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrSymbol>
          <CanisMajor />
        </Dictainer.BjrSymbol>
        <Dictainer.BjrName>큰개자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrSymbol>
          <Auriga />
        </Dictainer.BjrSymbol>
        <Dictainer.BjrName>마차부자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrSymbol>
          <Orion />
        </Dictainer.BjrSymbol>
        <Dictainer.BjrName>오리온자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrSymbol>
          <CanisMinor />
        </Dictainer.BjrSymbol>
        <Dictainer.BjrName>작은개자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrSymbol>
          <Taurus />
        </Dictainer.BjrSymbol>
        <Dictainer.BjrName>황소자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
    </Dictainer.DictSubBox>
  );
}

export default MyDictDongTop;
