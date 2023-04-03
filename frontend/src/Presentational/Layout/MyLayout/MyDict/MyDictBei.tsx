import React, { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import * as Dictainer from '../../../Components/MyComponents/MyDictComponent/MyDictContainer';
import UrsaMajor from '../../../../Assets/Mypage/symbols/UrsaMajor';
import UrsaMinor from '../../../../Assets/Mypage/symbols/UrsaMinor';
import Draco from '../../../../Assets/Mypage/symbols/Draco';
import Cassiopeia from '../../../../Assets/Mypage/symbols/Cassiopeia';
import Cepheus from '../../../../Assets/Mypage/symbols/Cepheus';
import Camelopardalis from '../../../../Assets/Mypage/symbols/Camelopardalis';
import StarInfo from '../../../Common/Components/StarInfo/StarInfo';

function MyDictBei() {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  return (
    <Dictainer.DictSubBox>
      <AnimatePresence>
        <Dictainer.BjrBox onClick={onClickToggleModal}>
          {isOpenModal && <StarInfo onClickToggleModal={onClickToggleModal}>이곳에 children이 들어갑니다.</StarInfo>}
          <Dictainer.BjrSymbol as={motion.div} drag>
            <UrsaMajor />
          </Dictainer.BjrSymbol>
          <Dictainer.BjrName>큰곰자리</Dictainer.BjrName>
        </Dictainer.BjrBox>
        <Dictainer.BjrBox>
          <Dictainer.BjrSymbol>
            <UrsaMinor />
          </Dictainer.BjrSymbol>
          <Dictainer.BjrName>작은곰자리</Dictainer.BjrName>
        </Dictainer.BjrBox>
        <Dictainer.BjrBox onClick={onClickToggleModal}>
          {isOpenModal && <StarInfo onClickToggleModal={onClickToggleModal}>이곳에 children이 들어갑니다.</StarInfo>}
          <Dictainer.BjrSymbol>
            <Draco />
          </Dictainer.BjrSymbol>
          <Dictainer.BjrName>용자리</Dictainer.BjrName>
        </Dictainer.BjrBox>
        <Dictainer.BjrBox>
          <Dictainer.BjrSymbol>
            <Cassiopeia />
          </Dictainer.BjrSymbol>
          <Dictainer.BjrName>카시오페아자리</Dictainer.BjrName>
        </Dictainer.BjrBox>
        <Dictainer.BjrBox>
          <Dictainer.BjrSymbol>
            <Cepheus />
          </Dictainer.BjrSymbol>
          <Dictainer.BjrName>세페우스자리</Dictainer.BjrName>
        </Dictainer.BjrBox>
        <Dictainer.BjrBox>
          <Dictainer.BjrSymbol>
            <Camelopardalis />
          </Dictainer.BjrSymbol>
          <Dictainer.BjrName>기린자리</Dictainer.BjrName>
        </Dictainer.BjrBox>
      </AnimatePresence>
    </Dictainer.DictSubBox>
  );
}

export default MyDictBei;
