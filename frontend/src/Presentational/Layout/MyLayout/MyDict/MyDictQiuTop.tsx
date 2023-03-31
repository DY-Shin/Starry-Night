import React from 'react';
import Andromeda from '../../../../MyAssets/symbols/Andromeda';
import Aries from '../../../../MyAssets/symbols/Aries';
import Cetus from '../../../../MyAssets/symbols/Cetus';
import Pegasus from '../../../../MyAssets/symbols/Pegasus';
import Perseus from '../../../../MyAssets/symbols/Perseus';
import PiscisAustrinus from '../../../../MyAssets/symbols/PiscisAustrinus';
import * as Dictainer from '../../../Components/MyComponents/MyDictComponent/MyDictContainer';

function MyDictQiuTop() {
  return (
    <Dictainer.DictSubBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrPhoto>
          <PiscisAustrinus />
        </Dictainer.BjrPhoto>
        <Dictainer.BjrName>남쪽물고기자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrPhoto>
          <Perseus />
        </Dictainer.BjrPhoto>
        <Dictainer.BjrName>페르세우스자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrPhoto>
          <Cetus />
        </Dictainer.BjrPhoto>
        <Dictainer.BjrName>고래자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrPhoto>
          <Aries />
        </Dictainer.BjrPhoto>
        <Dictainer.BjrName>양자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrPhoto>
          <Andromeda />
        </Dictainer.BjrPhoto>
        <Dictainer.BjrName>안드로메다자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrPhoto>
          <Pegasus />
        </Dictainer.BjrPhoto>
        <Dictainer.BjrName>페가수스자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
    </Dictainer.DictSubBox>
  );
}

export default MyDictQiuTop;
