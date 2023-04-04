/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { GrPrevious, GrNext } from 'react-icons/gr';
import Swal from 'sweetalert2';
import * as BoardPagenationStyle from './BoardPagenation_Style';
import WritePost from '../../../Board/WritePost';

type propsType = {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPage: number | undefined;
  map: naver.maps.Map | null;
};

function BoardPagenation(props: propsType) {
  const { currentPage, setCurrentPage, totalPage, map } = props;
  const [isMoodalOpen, setModalOpen] = useState(false);

  console.log('props', props);

  function moveNextPage() {
    setCurrentPage(currentPage + 1);
  }

  function movePrevPage() {
    setCurrentPage(currentPage - 1);
  }

  useEffect(() => {
    if (isMoodalOpen) {
      const writeModal = <WritePost firstCenter={map?.getCenter()} setModalOpen={setModalOpen} />;
      const modalContainer = document.createElement('div');
      modalContainer.className = 'WriteModal';
      document.body.appendChild(modalContainer);
      ReactDOM.render(writeModal, modalContainer);
    } else {
      const writeModal = document.getElementsByClassName('WriteModal')[0];
      if (writeModal) {
        writeModal.remove();
      }
    }
  }, [isMoodalOpen]);

  let previousButton;
  let nextButton;
  if (totalPage !== currentPage) {
    if (currentPage === 1) {
      previousButton = <GrPrevious visibility="hidden" className="icon" />;
    } else {
      previousButton = <GrPrevious className="icon" onClick={() => movePrevPage} />;
    }
    if (totalPage === undefined) {
      nextButton = <GrNext visibility="hidden" className="icon" />;
    } else {
      nextButton = <GrNext className="icon" onClick={() => moveNextPage} />;
    }
  } else {
    previousButton = <GrPrevious visibility="hidden" className="icon" />;
    nextButton = <GrNext visibility="hidden" className="icon" />;
  }

  return (
    <BoardPagenationStyle.PagenationWrapper>
      {previousButton}
      <BoardPagenationStyle.WriteButton onClick={() => setModalOpen(!isMoodalOpen)}>
        글쓰기
      </BoardPagenationStyle.WriteButton>
      {nextButton}
    </BoardPagenationStyle.PagenationWrapper>
  );
}

export default BoardPagenation;
