import React from 'react';
import Gemini from '../../../../Assets/Mypage/symbols/Gemini';
import Cancer from '../../../../Assets/Mypage/symbols/Cancer';
import Eridanus from '../../../../Assets/Mypage/symbols/Eridanus';
import Lupus from '../../../../Assets/Mypage/symbols/Lupus';
import Monoceros from '../../../../Assets/Mypage/symbols/Monoceros';
import * as Dictainer from '../../../Components/MyComponents/MyDictComponent/MyDictContainer';

function MyDictDongBot() {
  return (
    <Dictainer.DictSubBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrSymbol>
          <Gemini />
        </Dictainer.BjrSymbol>
        <Dictainer.BjrName>쌍둥이자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrSymbol>
          <Lupus />
        </Dictainer.BjrSymbol>
        <Dictainer.BjrName>토끼자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrSymbol>
          <Eridanus />
        </Dictainer.BjrSymbol>
        <Dictainer.BjrName>에리다누스자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrSymbol>
          <Cancer />
        </Dictainer.BjrSymbol>
        <Dictainer.BjrName>게자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrSymbol>
          <Monoceros />
        </Dictainer.BjrSymbol>
        <Dictainer.BjrName>외뿔소자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
    </Dictainer.DictSubBox>
  );
}

export default MyDictDongBot;
