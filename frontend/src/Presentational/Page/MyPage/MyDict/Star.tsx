/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect, useState, useCallback } from 'react';
import * as DictainerStyle from '../../../Components/MyComponents/MyDictComponent/MyDictContainer';
import Star1 from '../../../../Assets/Mypage/symbols/Star1';
import StarInfo from '../../../Common/Components/StarInfo/StarInfo';

interface Constellation {
  id: number;
  name: string;
  completed: boolean;
}

function Star({ constellation }: { constellation: Constellation }) {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  return (
    <>
      {constellation.completed ? (
        <DictainerStyle.BjrBox key={constellation.id} onClick={onClickToggleModal}>
          {isOpenModal && (
            <StarInfo onClickToggleModal={onClickToggleModal} id={constellation.id}>
              {constellation.name}
            </StarInfo>
          )}
          <DictainerStyle.BjrSymbol>
            <Star1 id={constellation.id} />
          </DictainerStyle.BjrSymbol>
          <DictainerStyle.BjrName>{constellation.name}</DictainerStyle.BjrName>
          <DictainerStyle.Check size="24" />
        </DictainerStyle.BjrBox>
      ) : (
        <DictainerStyle.BjrBox key={constellation.id} onClick={onClickToggleModal}>
          {isOpenModal ? (
            <StarInfo onClickToggleModal={onClickToggleModal} id={constellation.id}>
              {constellation.name}
            </StarInfo>
          ) : null}
          <DictainerStyle.FalseBjrSymbol>
            <Star1 id={constellation.id} />
          </DictainerStyle.FalseBjrSymbol>
          <DictainerStyle.FalseBjrName>{constellation.name}</DictainerStyle.FalseBjrName>
        </DictainerStyle.BjrBox>
      )}
    </>
  );
}

export default Star;
