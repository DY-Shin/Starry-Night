import React from 'react';
import Aquarius from '../../../../MyAssets/symbols/Aquarius';
import Equulues from '../../../../MyAssets/symbols/Equuleus';
import Lacerta from '../../../../MyAssets/symbols/Lacerta';
import Pisces from '../../../../MyAssets/symbols/Pisces';
import Triangulum from '../../../../MyAssets/symbols/Triangulum';
import * as Dictainer from '../../../Components/MyComponents/MyDictComponent/MyDictContainer';

function MyDictQiuBot() {
  return (
    <Dictainer.DictSubBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrPhoto>
          <Aquarius />
        </Dictainer.BjrPhoto>
        <Dictainer.BjrName>물병자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrPhoto>
          <Triangulum />
        </Dictainer.BjrPhoto>
        <Dictainer.BjrName>삼각형자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrPhoto>
          <Lacerta />
        </Dictainer.BjrPhoto>
        <Dictainer.BjrName>도마뱀자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrPhoto>
          <Pisces />
        </Dictainer.BjrPhoto>
        <Dictainer.BjrName>물고기자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrPhoto>
          <Equulues />
        </Dictainer.BjrPhoto>
        <Dictainer.BjrName>조랑말자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
    </Dictainer.DictSubBox>
  );
}

export default MyDictQiuBot;
