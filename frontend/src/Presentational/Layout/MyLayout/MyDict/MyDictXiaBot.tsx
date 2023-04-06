import React from 'react';
import Scutum from '../../../../Assets/Mypage/symbols/Scutum';
import Sagitta from '../../../../Assets/Mypage/symbols/Sagitta';
import Hercules from '../../../../Assets/Mypage/symbols/Hercules';
import Capricornus from '../../../../Assets/Mypage/symbols/Capricornus';
import * as Dictainer from '../../../Components/MyComponents/MyDictComponent/MyDictContainer';
import Delphinus from '../../../../Assets/Mypage/symbols/Delphinus';
import Vulpecula from '../../../../Assets/Mypage/symbols/Vulpecula';

function MyDictXiaBot() {
  return (
    <Dictainer.DictSubBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrSymbol>
          <Hercules />
        </Dictainer.BjrSymbol>
        <Dictainer.BjrName>헤라클레스자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrSymbol>
          <Capricornus />
        </Dictainer.BjrSymbol>
        <Dictainer.BjrName>염소자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrSymbol>
          <Sagitta />
        </Dictainer.BjrSymbol>
        <Dictainer.BjrName>화살자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrSymbol>
          <Scutum />
        </Dictainer.BjrSymbol>
        <Dictainer.BjrName>방패자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrSymbol>
          <Delphinus />
        </Dictainer.BjrSymbol>
        <Dictainer.BjrName>돌고래자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrSymbol>
          <Vulpecula />
        </Dictainer.BjrSymbol>
        <Dictainer.BjrName>여우자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
    </Dictainer.DictSubBox>
  );
}

export default MyDictXiaBot;
