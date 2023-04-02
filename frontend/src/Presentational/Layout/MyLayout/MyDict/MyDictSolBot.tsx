import React from 'react';
import Aquarius from '../../../../Assets/Mypage/symbols/Aquarius';
import Capricornus from '../../../../Assets/Mypage/symbols/Capricornus';
import Ophiuchus from '../../../../Assets/Mypage/symbols/Ophiuchus';
import Pisces from '../../../../Assets/Mypage/symbols/Pisces';
import Sagittarius from '../../../../Assets/Mypage/symbols/Sagittarius';
import Scorpius from '../../../../Assets/Mypage/symbols/Scorpius';
import * as Dictainer from '../../../Components/MyComponents/MyDictComponent/MyDictContainer';

function MyDictSolBot() {
  return (
    <Dictainer.DictSubBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrSymbol>
          <Scorpius />
        </Dictainer.BjrSymbol>
        <Dictainer.BjrName>전갈자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrSymbol>
          <Ophiuchus />
        </Dictainer.BjrSymbol>
        <Dictainer.BjrName>뱀주인자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrSymbol>
          <Sagittarius />
        </Dictainer.BjrSymbol>
        <Dictainer.BjrName>궁수자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrSymbol>
          <Capricornus />
        </Dictainer.BjrSymbol>
        <Dictainer.BjrName>염소자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrSymbol>
          <Aquarius />
        </Dictainer.BjrSymbol>
        <Dictainer.BjrName>물병자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrSymbol>
          <Pisces />
        </Dictainer.BjrSymbol>
        <Dictainer.BjrName>물고기자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
    </Dictainer.DictSubBox>
  );
}

export default MyDictSolBot;
