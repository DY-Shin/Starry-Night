import React from 'react';
import Gemini from '../../../../MyAssets/symbols/Gemini';
import Cancer from '../../../../MyAssets/symbols/Cancer';
import Eridanus from '../../../../MyAssets/symbols/Eridanus';
import Lupus from '../../../../MyAssets/symbols/Lupus';
import Monoceros from '../../../../MyAssets/symbols/Monoceros';
import * as Dictainer from '../../../Components/MyComponents/MyDictComponent/MyDictContainer';

function MyDictDongBot() {
  return (
    <Dictainer.DictSubBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrPhoto>
          <Gemini />
        </Dictainer.BjrPhoto>
        <Dictainer.BjrName>쌍둥이자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrPhoto>
          <Lupus />
        </Dictainer.BjrPhoto>
        <Dictainer.BjrName>토끼자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrPhoto>
          <Eridanus />
        </Dictainer.BjrPhoto>
        <Dictainer.BjrName>에리다누스자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrPhoto>
          <Cancer />
        </Dictainer.BjrPhoto>
        <Dictainer.BjrName>게자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrPhoto>
          <Monoceros />
        </Dictainer.BjrPhoto>
        <Dictainer.BjrName>외뿔소자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
    </Dictainer.DictSubBox>
  );
}

export default MyDictDongBot;
