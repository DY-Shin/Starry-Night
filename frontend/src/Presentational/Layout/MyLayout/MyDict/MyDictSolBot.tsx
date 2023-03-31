import React from 'react';
import Aquarius from '../../../../MyAssets/symbols/Aquarius';
import Capricornus from '../../../../MyAssets/symbols/Capricornus';
import Ophiuchus from '../../../../MyAssets/symbols/Ophiuchus';
import Pisces from '../../../../MyAssets/symbols/Pisces';
import Sagittarius from '../../../../MyAssets/symbols/Sagittarius';
import Scorpius from '../../../../MyAssets/symbols/Scorpius';
import * as Dictainer from '../../../Components/MyComponents/MyDictComponent/MyDictContainer';

function MyDictSolBot() {
  return (
    <Dictainer.DictSubBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrPhoto>
          <Scorpius />
        </Dictainer.BjrPhoto>
        <Dictainer.BjrName>전갈자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrPhoto>
          <Ophiuchus />
        </Dictainer.BjrPhoto>
        <Dictainer.BjrName>뱀주인자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrPhoto>
          <Sagittarius />
        </Dictainer.BjrPhoto>
        <Dictainer.BjrName>궁수자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrPhoto>
          <Capricornus />
        </Dictainer.BjrPhoto>
        <Dictainer.BjrName>염소자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrPhoto>
          <Aquarius />
        </Dictainer.BjrPhoto>
        <Dictainer.BjrName>물병자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrPhoto>
          <Pisces />
        </Dictainer.BjrPhoto>
        <Dictainer.BjrName>물고기자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
    </Dictainer.DictSubBox>
  );
}

export default MyDictSolBot;
