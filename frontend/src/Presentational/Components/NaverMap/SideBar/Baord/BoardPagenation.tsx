import React from 'react';
import { GrPrevious, GrNext } from 'react-icons/gr';
import * as BoardPagenationStyle from './BoardPagenation_Style';

type propsType = {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPage: number | undefined;
};

function BoardPagenation(props: propsType) {
  const { currentPage, setCurrentPage, totalPage } = props;

  function moveNextPage() {
    setCurrentPage(currentPage + 1);
  }

  function movePrevPage() {
    setCurrentPage(currentPage - 1);
  }

  let previousButton;
  if (totalPage !== currentPage) {
    if (currentPage === 1) {
      previousButton = <GrPrevious visibility="hidden" className="icon" />;
    } else {
      previousButton = <GrPrevious className="icon" onClick={() => movePrevPage} />;
    }
  } else {
    previousButton = <GrPrevious visibility="hidden" className="icon" />;
  }

  return (
    <BoardPagenationStyle.PagenationWrapper>
      {previousButton}

      <BoardPagenationStyle.WriteButton>글쓰기</BoardPagenationStyle.WriteButton>
      {totalPage !== currentPage ? (
        <GrNext className="icon" onClick={() => moveNextPage} />
      ) : (
        <GrNext visibility="hidden" className="icon" />
      )}
      {/* <BoardPagenationStyle.PrevButton>&lt;</BoardPagenationStyle.PrevButton>
      <BoardPagenationStyle.NextButton>&gt;</BoardPagenationStyle.NextButton> */}
    </BoardPagenationStyle.PagenationWrapper>
  );
}

export default BoardPagenation;
