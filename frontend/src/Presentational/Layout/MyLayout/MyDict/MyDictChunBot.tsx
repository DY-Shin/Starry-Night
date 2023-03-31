import React from 'react';
import CanesVenatici from '../../../../MyAssets/symbols/CanesVenatici';
import ComaBerenices from '../../../../MyAssets/symbols/ComaBerenices';
import Crater from '../../../../MyAssets/symbols/Crater';
import LeoMinor from '../../../../MyAssets/symbols/LeoMinor';
import Lynx from '../../../../MyAssets/symbols/Lynx';
import Sextans from '../../../../MyAssets/symbols/Sextans';
import * as Dictainer from '../../../Components/MyComponents/MyDictComponent/MyDictContainer';

function MyDictChunBot() {
  return (
    <Dictainer.DictSubBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrPhoto>
          <CanesVenatici />
        </Dictainer.BjrPhoto>
        <Dictainer.BjrName>사냥개자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrPhoto>
          <Lynx />
        </Dictainer.BjrPhoto>
        <Dictainer.BjrName>살쾡이자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrPhoto>
          <Crater />
        </Dictainer.BjrPhoto>
        <Dictainer.BjrName>컵자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrPhoto>
          <LeoMinor />
        </Dictainer.BjrPhoto>
        <Dictainer.BjrName>작은사자자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrPhoto>
          <ComaBerenices />
        </Dictainer.BjrPhoto>
        <Dictainer.BjrName>머리털자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrPhoto>
          <Sextans />
        </Dictainer.BjrPhoto>
        <Dictainer.BjrName>육분의자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
    </Dictainer.DictSubBox>
  );
}

export default MyDictChunBot;
