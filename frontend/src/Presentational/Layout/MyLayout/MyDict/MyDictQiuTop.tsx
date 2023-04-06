import React from 'react';
import Andromeda from '../../../../Assets/Mypage/symbols/Andromeda';
import Aries from '../../../../Assets/Mypage/symbols/Aries';
import Cetus from '../../../../Assets/Mypage/symbols/Cetus';
import Pegasus from '../../../../Assets/Mypage/symbols/Pegasus';
import Perseus from '../../../../Assets/Mypage/symbols/Perseus';
import PiscisAustrinus from '../../../../Assets/Mypage/symbols/PiscisAustrinus';
import * as Dictainer from '../../../Components/MyComponents/MyDictComponent/MyDictContainer';

function MyDictQiuTop() {
  return (
    <Dictainer.DictSubBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrSymbol>
          <PiscisAustrinus />
        </Dictainer.BjrSymbol>
        <Dictainer.BjrName>남쪽물고기자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrSymbol>
          <Perseus />
        </Dictainer.BjrSymbol>
        <Dictainer.BjrName>페르세우스자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrSymbol>
          <Cetus />
        </Dictainer.BjrSymbol>
        <Dictainer.BjrName>고래자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrSymbol>
          <Aries />
        </Dictainer.BjrSymbol>
        <Dictainer.BjrName>양자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrSymbol>
          <Andromeda />
        </Dictainer.BjrSymbol>
        <Dictainer.BjrName>안드로메다자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrSymbol>
          <Pegasus />
        </Dictainer.BjrSymbol>
        <Dictainer.BjrName>페가수스자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
    </Dictainer.DictSubBox>
  );
}

export default MyDictQiuTop;
