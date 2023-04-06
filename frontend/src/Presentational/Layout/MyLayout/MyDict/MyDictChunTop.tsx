import React from 'react';
import Bootes from '../../../../Assets/Mypage/symbols/Bootes';
import CoronaBorealis from '../../../../Assets/Mypage/symbols/CoronaBorealis';
import Corvus from '../../../../Assets/Mypage/symbols/Corvus';
import Hydra from '../../../../Assets/Mypage/symbols/Hydra';
import Leo from '../../../../Assets/Mypage/symbols/Leo';
import Libra from '../../../../Assets/Mypage/symbols/Libra';
import Virgo from '../../../../Assets/Mypage/symbols/Virgo';
import * as Dictainer from '../../../Components/MyComponents/MyDictComponent/MyDictContainer';

function MyDictChunTop() {
  return (
    <Dictainer.DictSubBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrSymbol>
          <Bootes />
        </Dictainer.BjrSymbol>
        <Dictainer.BjrName>목동자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrSymbol>
          <Virgo />
        </Dictainer.BjrSymbol>
        <Dictainer.BjrName>처녀자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrSymbol>
          <Leo />
        </Dictainer.BjrSymbol>
        <Dictainer.BjrName>사자자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrSymbol>
          <Hydra />
        </Dictainer.BjrSymbol>
        <Dictainer.BjrName>바다뱀자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrSymbol>
          <CoronaBorealis />
        </Dictainer.BjrSymbol>
        <Dictainer.BjrName>왕관자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrSymbol>
          <Corvus />
        </Dictainer.BjrSymbol>
        <Dictainer.BjrName>까마귀자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrSymbol>
          <Libra />
        </Dictainer.BjrSymbol>
        <Dictainer.BjrName>천칭자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
    </Dictainer.DictSubBox>
  );
}

export default MyDictChunTop;
