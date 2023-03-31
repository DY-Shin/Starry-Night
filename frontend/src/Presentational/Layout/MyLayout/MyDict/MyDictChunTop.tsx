import React from 'react';
import Bootes from '../../../../MyAssets/symbols/Bootes';
import CoronaBorealis from '../../../../MyAssets/symbols/CoronaBorealis';
import Corvus from '../../../../MyAssets/symbols/Corvus';
import Hydra from '../../../../MyAssets/symbols/Hydra';
import Leo from '../../../../MyAssets/symbols/Leo';
import Libra from '../../../../MyAssets/symbols/Libra';
import Virgo from '../../../../MyAssets/symbols/Virgo';
import * as Dictainer from '../../../Components/MyComponents/MyDictComponent/MyDictContainer';

function MyDictChunTop() {
  return (
    <Dictainer.DictSubBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrPhoto>
          <Bootes />
        </Dictainer.BjrPhoto>
        <Dictainer.BjrName>목동자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrPhoto>
          <Virgo />
        </Dictainer.BjrPhoto>
        <Dictainer.BjrName>처녀자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrPhoto>
          <Leo />
        </Dictainer.BjrPhoto>
        <Dictainer.BjrName>사자자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrPhoto>
          <Hydra />
        </Dictainer.BjrPhoto>
        <Dictainer.BjrName>바다뱀자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrPhoto>
          <CoronaBorealis />
        </Dictainer.BjrPhoto>
        <Dictainer.BjrName>왕관자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrPhoto>
          <Corvus />
        </Dictainer.BjrPhoto>
        <Dictainer.BjrName>까마귀자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrPhoto>
          <Libra />
        </Dictainer.BjrPhoto>
        <Dictainer.BjrName>천칭자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
    </Dictainer.DictSubBox>
  );
}

export default MyDictChunTop;
