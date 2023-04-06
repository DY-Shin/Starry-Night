/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect, useState, useCallback } from 'react';
import * as DictainerStyle from '../../../Components/MyComponents/MyDictComponent/MyDictContainer';
import Star1 from '../../../../Assets/Mypage/symbols/Star1';
import Star2 from '../../../../Assets/Mypage/symbols_modi/Star2';
import StarInfo from '../../../Common/Components/StarInfo/StarInfo';

interface Constellation {
  id: number;
  name: string;
  completed: boolean;
}

function Star({ constellation }: { constellation: Constellation }) {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const [hovered, setHovered] = useState<boolean>(false);

  const onClickToggleModal = useCallback(() => {
    setHovered(false);
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  const reRenderHover = (): void => {
    setHovered(true);
  };
  const reRenderLeave = (): void => {
    setHovered(false);
  };

  return (
    <>
      {constellation.completed ? (
        <DictainerStyle.BjrBox
          key={constellation.id}
          onClick={onClickToggleModal}
          onMouseEnter={reRenderHover}
          onMouseLeave={reRenderLeave}
        >
          {isOpenModal && (
            <StarInfo onClickToggleModal={onClickToggleModal} id={constellation.id}>
              {constellation.name}
            </StarInfo>
          )}
          {hovered ? (
            <DictainerStyle.BjrSymbol>
              <Star2 id={constellation.id} />
            </DictainerStyle.BjrSymbol>
          ) : (
            <h1>
              <DictainerStyle.BjrSymbol>
                <Star1 id={constellation.id} />
              </DictainerStyle.BjrSymbol>
            </h1>
          )}
          <DictainerStyle.BjrName>{constellation.name}</DictainerStyle.BjrName>
          <DictainerStyle.Check size="24" />
        </DictainerStyle.BjrBox>
      ) : (
        <DictainerStyle.BjrBox
          key={constellation.id}
          onClick={onClickToggleModal}
          onMouseEnter={reRenderHover}
          onMouseLeave={reRenderLeave}
        >
          {isOpenModal ? (
            <StarInfo onClickToggleModal={onClickToggleModal} id={constellation.id}>
              {constellation.name}
            </StarInfo>
          ) : null}
          {hovered ? (
            <DictainerStyle.BjrSymbol>
              <Star2 id={constellation.id} />
            </DictainerStyle.BjrSymbol>
          ) : (
            <h1>
              <DictainerStyle.BjrSymbol>
                <Star1 id={constellation.id} />
              </DictainerStyle.BjrSymbol>
            </h1>
          )}
          <DictainerStyle.FalseBjrName>{constellation.name}</DictainerStyle.FalseBjrName>
        </DictainerStyle.BjrBox>
      )}
    </>
  );
}

export default Star;
