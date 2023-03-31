import React from 'react';
import Aries from '../../../../MyAssets/symbols/Aries';
import Cancer from '../../../../MyAssets/symbols/Cancer';
import Gemini from '../../../../MyAssets/symbols/Gemini';
import Leo from '../../../../MyAssets/symbols/Leo';
import Libra from '../../../../MyAssets/symbols/Libra';
import Taurus from '../../../../MyAssets/symbols/Taurus';
import Virgo from '../../../../MyAssets/symbols/Virgo';
import * as Dictainer from '../../../Components/MyComponents/MyDictComponent/MyDictContainer';

function MyDictSolTop() {
  return (
    <Dictainer.DictSubBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrPhoto>
          <Aries />
        </Dictainer.BjrPhoto>
        <Dictainer.BjrName>양자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrPhoto>
          <Taurus />
        </Dictainer.BjrPhoto>
        <Dictainer.BjrName>황소자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrPhoto>
          <Gemini />
        </Dictainer.BjrPhoto>
        <Dictainer.BjrName>쌍둥이자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrPhoto>
          <Cancer />
        </Dictainer.BjrPhoto>
        <Dictainer.BjrName>게자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrPhoto>
          <Leo />
        </Dictainer.BjrPhoto>
        <Dictainer.BjrName>사자자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrPhoto>
          <Virgo />
        </Dictainer.BjrPhoto>
        <Dictainer.BjrName>처녀자리</Dictainer.BjrName>
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

export default MyDictSolTop;
