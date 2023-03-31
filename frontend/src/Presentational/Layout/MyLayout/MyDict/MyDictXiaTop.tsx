import React from 'react';
import Aquila from '../../../../MyAssets/symbols/Aquila';
import Cygnus from '../../../../MyAssets/symbols/Cygnus';
import Lyra from '../../../../MyAssets/symbols/Lyra';
import Ophiuchus from '../../../../MyAssets/symbols/Ophiuchus';
import Sagittarius from '../../../../MyAssets/symbols/Sagittarius';
import Scorpius from '../../../../MyAssets/symbols/Scorpius';
import Serpens from '../../../../MyAssets/symbols/Serpens';
import * as Dictainer from '../../../Components/MyComponents/MyDictComponent/MyDictContainer';

function MyDictXiaTop() {
  return (
    <Dictainer.DictSubBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrPhoto>
          <Lyra />
        </Dictainer.BjrPhoto>
        <Dictainer.BjrName>거문고자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrPhoto>
          <Aquila />
        </Dictainer.BjrPhoto>
        <Dictainer.BjrName>독수리자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrPhoto>
          <Scorpius />
        </Dictainer.BjrPhoto>
        <Dictainer.BjrName>전갈자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrPhoto>
          <Cygnus />
        </Dictainer.BjrPhoto>
        <Dictainer.BjrName>백조자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrPhoto>
          <Sagittarius />
        </Dictainer.BjrPhoto>
        <Dictainer.BjrName>궁수자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrPhoto>
          <Ophiuchus />
        </Dictainer.BjrPhoto>
        <Dictainer.BjrName>뱀주인자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
      <Dictainer.BjrBox>
        <Dictainer.BjrPhoto>
          <Serpens />
        </Dictainer.BjrPhoto>
        <Dictainer.BjrName>뱀자리</Dictainer.BjrName>
      </Dictainer.BjrBox>
    </Dictainer.DictSubBox>
  );
}

export default MyDictXiaTop;
