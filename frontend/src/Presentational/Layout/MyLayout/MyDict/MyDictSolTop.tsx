import React from 'react';
import Aries from '../../../../Assets/Mypage/symbols/Aries';
import Cancer from '../../../../Assets/Mypage/symbols/Cancer';
import Gemini from '../../../../Assets/Mypage/symbols/Gemini';
import Leo from '../../../../Assets/Mypage/symbols/Leo';
import Libra from '../../../../Assets/Mypage/symbols/Libra';
import Taurus from '../../../../Assets/Mypage/symbols/Taurus';
import Virgo from '../../../../Assets/Mypage/symbols/Virgo';
import * as Dictainer from '../../../Components/MyComponents/MyDictComponent/MyDictContainer';

function MyDictSolTop() {
  return (
    <Dictainer.DictSubBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrSymbol>
          <Aries />
        </Dictainer.BjrSymbol>
        <Dictainer.BjrName>양자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrSymbol>
          <Taurus />
        </Dictainer.BjrSymbol>
        <Dictainer.BjrName>황소자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrSymbol>
          <Gemini />
        </Dictainer.BjrSymbol>
        <Dictainer.BjrName>쌍둥이자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrSymbol>
          <Cancer />
        </Dictainer.BjrSymbol>
        <Dictainer.BjrName>게자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrSymbol>
          <Leo />
        </Dictainer.BjrSymbol>
        <Dictainer.BjrName>사자자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrSymbol>
          <Virgo />
        </Dictainer.BjrSymbol>
        <Dictainer.BjrName>처녀자리</Dictainer.BjrName>
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

export default MyDictSolTop;
