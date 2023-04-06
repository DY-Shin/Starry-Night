import React from 'react';
import CanesVenatici from '../../../../Assets/Mypage/symbols/CanesVenatici';
import ComaBerenices from '../../../../Assets/Mypage/symbols/ComaBerenices';
import Crater from '../../../../Assets/Mypage/symbols/Crater';
import LeoMinor from '../../../../Assets/Mypage/symbols/LeoMinor';
import Lynx from '../../../../Assets/Mypage/symbols/Lynx';
import Sextans from '../../../../Assets/Mypage/symbols/Sextans';
import * as Dictainer from '../../../Components/MyComponents/MyDictComponent/MyDictContainer';

function MyDictChunBot() {
  return (
    <Dictainer.DictSubBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrSymbol>
          <CanesVenatici />
        </Dictainer.BjrSymbol>
        <Dictainer.BjrName>사냥개자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrSymbol>
          <Lynx />
        </Dictainer.BjrSymbol>
        <Dictainer.BjrName>살쾡이자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrSymbol>
          <Crater />
        </Dictainer.BjrSymbol>
        <Dictainer.BjrName>컵자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrSymbol>
          <LeoMinor />
        </Dictainer.BjrSymbol>
        <Dictainer.BjrName>작은사자자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrSymbol>
          <ComaBerenices />
        </Dictainer.BjrSymbol>
        <Dictainer.BjrName>머리털자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrSymbol>
          <Sextans />
        </Dictainer.BjrSymbol>
        <Dictainer.BjrName>육분의자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
    </Dictainer.DictSubBox>
  );
}

export default MyDictChunBot;
