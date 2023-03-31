import React from 'react';
import Scutum from '../../../../MyAssets/symbols/Scutum';
import Sagitta from '../../../../MyAssets/symbols/Sagitta';
import Hercules from '../../../../MyAssets/symbols/Hercules';
import Capricornus from '../../../../MyAssets/symbols/Capricornus';
import * as Dictainer from '../../../Components/MyComponents/MyDictComponent/MyDictContainer';
import Delphinus from '../../../../MyAssets/symbols/Delphinus';
import Vulpecula from '../../../../MyAssets/symbols/Vulpecula';

function MyDictXiaBot() {
  return (
    <Dictainer.DictSubBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrPhoto>
          <Hercules />
        </Dictainer.BjrPhoto>
        <Dictainer.BjrName>헤라클레스자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrPhoto>
          <Capricornus />
        </Dictainer.BjrPhoto>
        <Dictainer.BjrName>염소자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrPhoto>
          <Sagitta />
        </Dictainer.BjrPhoto>
        <Dictainer.BjrName>화살자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrPhoto>
          <Scutum />
        </Dictainer.BjrPhoto>
        <Dictainer.BjrName>방패자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrPhoto>
          <Delphinus />
        </Dictainer.BjrPhoto>
        <Dictainer.BjrName>돌고래자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrPhoto>
          <Vulpecula />
        </Dictainer.BjrPhoto>
        <Dictainer.BjrName>여우자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
    </Dictainer.DictSubBox>
  );
}

export default MyDictXiaBot;
