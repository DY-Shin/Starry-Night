import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import * as Dictainer from '../../../Components/MyComponents/MyDictComponent/MyDictContainer';
import UrsaMajor from '../../../../MyAssets/symbols/UrsaMajor';
import UrsaMinor from '../../../../MyAssets/symbols/UrsaMinor';
import Draco from '../../../../MyAssets/symbols/Draco';
import Cassiopeia from '../../../../MyAssets/symbols/Cassiopeia';
import Cepheus from '../../../../MyAssets/symbols/Cepheus';
import Camelopardalis from '../../../../MyAssets/symbols/Camelopardalis';

function MyDictBei() {
  return (
    <Dictainer.DictSubBox>
      <AnimatePresence>
        <Dictainer.BjrBox>
          <Dictainer.BjrPhoto as={motion.div} drag>
            <UrsaMajor />
          </Dictainer.BjrPhoto>
          <Dictainer.BjrName>큰곰자리</Dictainer.BjrName>
        </Dictainer.BjrBox>
        <Dictainer.BjrBox>
          <Dictainer.BjrPhoto>
            <UrsaMinor />
          </Dictainer.BjrPhoto>
          <Dictainer.BjrName>작은곰자리</Dictainer.BjrName>
        </Dictainer.BjrBox>
        <Dictainer.BjrBox>
          <Dictainer.BjrPhoto>
            <Draco />
          </Dictainer.BjrPhoto>
          <Dictainer.BjrName>용자리</Dictainer.BjrName>
        </Dictainer.BjrBox>
        <Dictainer.BjrBox>
          <Dictainer.BjrPhoto>
            <Cassiopeia />
          </Dictainer.BjrPhoto>
          <Dictainer.BjrName>카시오페아자리</Dictainer.BjrName>
        </Dictainer.BjrBox>
        <Dictainer.BjrBox>
          <Dictainer.BjrPhoto>
            <Cepheus />
          </Dictainer.BjrPhoto>
          <Dictainer.BjrName>세페우스자리</Dictainer.BjrName>
        </Dictainer.BjrBox>
        <Dictainer.BjrBox>
          <Dictainer.BjrPhoto>
            <Camelopardalis />
          </Dictainer.BjrPhoto>
          <Dictainer.BjrName>기린자리</Dictainer.BjrName>
        </Dictainer.BjrBox>
      </AnimatePresence>
    </Dictainer.DictSubBox>
  );
}

export default MyDictBei;
