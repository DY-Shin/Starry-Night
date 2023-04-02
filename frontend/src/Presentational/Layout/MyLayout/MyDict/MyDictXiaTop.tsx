import React from 'react';
import Aquila from '../../../../Assets/Mypage/symbols/Aquila';
import Cygnus from '../../../../Assets/Mypage/symbols/Cygnus';
import Lyra from '../../../../Assets/Mypage/symbols/Lyra';
import Ophiuchus from '../../../../Assets/Mypage/symbols/Ophiuchus';
import Sagittarius from '../../../../Assets/Mypage/symbols/Sagittarius';
import Scorpius from '../../../../Assets/Mypage/symbols/Scorpius';
import Serpens from '../../../../Assets/Mypage/symbols/Serpens';
import * as Dictainer from '../../../Components/MyComponents/MyDictComponent/MyDictContainer';

function MyDictXiaTop() {
  return (
    <Dictainer.DictSubBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrSymbol>
          <Lyra />
        </Dictainer.BjrSymbol>
        <Dictainer.BjrName>거문고자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrSymbol>
          <Aquila />
        </Dictainer.BjrSymbol>
        <Dictainer.BjrName>독수리자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrSymbol>
          <Scorpius />
        </Dictainer.BjrSymbol>
        <Dictainer.BjrName>전갈자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrSymbol>
          <Cygnus />
        </Dictainer.BjrSymbol>
        <Dictainer.BjrName>백조자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrSymbol>
          <Sagittarius />
        </Dictainer.BjrSymbol>
        <Dictainer.BjrName>궁수자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrSymbol>
          <Ophiuchus />
        </Dictainer.BjrSymbol>
        <Dictainer.BjrName>뱀주인자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrSymbol>
          <Serpens />
        </Dictainer.BjrSymbol>
        <Dictainer.BjrName>뱀자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
    </Dictainer.DictSubBox>
  );
}

export default MyDictXiaTop;
