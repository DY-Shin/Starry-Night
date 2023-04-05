import React from 'react';
import Aquarius from '../../../../Assets/Mypage/symbols/Aquarius';
import Equulues from '../../../../Assets/Mypage/symbols/Equuleus';
import Lacerta from '../../../../Assets/Mypage/symbols/Lacerta';
import Pisces from '../../../../Assets/Mypage/symbols/Pisces';
import Triangulum from '../../../../Assets/Mypage/symbols/Triangulum';
import * as Dictainer from '../../../Components/MyComponents/MyDictComponent/MyDictContainer';

function MyDictQiuBot() {
  return (
    <Dictainer.DictSubBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrSymbol>
          <Aquarius />
        </Dictainer.BjrSymbol>
        <Dictainer.BjrName>물병자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrSymbol>
          <Triangulum />
        </Dictainer.BjrSymbol>
        <Dictainer.BjrName>삼각형자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrSymbol>
          <Lacerta />
        </Dictainer.BjrSymbol>
        <Dictainer.BjrName>도마뱀자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrSymbol>
          <Pisces />
        </Dictainer.BjrSymbol>
        <Dictainer.BjrName>물고기자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrSymbol>
          <Equulues />
        </Dictainer.BjrSymbol>
        <Dictainer.BjrName>조랑말자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
    </Dictainer.DictSubBox>
  );
}

export default MyDictQiuBot;
