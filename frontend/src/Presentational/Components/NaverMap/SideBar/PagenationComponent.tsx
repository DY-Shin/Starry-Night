/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { GrPrevious, GrNext } from 'react-icons/gr';
import Swal from 'sweetalert2';
import * as PagenationStyle from './PagenationComponent_Style';
import WritePost from '../../Board/WritePost';
import AddFavorite from '../../Favorite/AddFavorite';

type propsType = {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPage: number | undefined;
  map: naver.maps.Map | null;
  text: string;
  updateHandler: () => void;
  type: string;
};

function PagenationComponent(props: propsType) {
  const { currentPage, setCurrentPage, totalPage, map, text, updateHandler, type } = props;
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
      const customModal =
        type === 'post' ? (
          <WritePost firstCenter={map?.getCenter()} setModalOpen={setModalOpen} />
        ) : (
          <AddFavorite firstCenter={map?.getCenter()} setModalOpen={setModalOpen} updateHandler={updateHandler} />
        );
      const modalContainer = document.createElement('div');
      modalContainer.className = 'customModal';
      document.body.appendChild(modalContainer);
      ReactDOM.render(customModal, modalContainer);
    } else {
      const customModal = document.getElementsByClassName('customModal')[0];
      if (customModal) {
        customModal.remove();
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
    <PagenationStyle.PagenationWrapper>
      {previousButton}
      <PagenationStyle.WriteButton onClick={() => setModalOpen(!isMoodalOpen)}>{text}</PagenationStyle.WriteButton>
      {nextButton}
    </PagenationStyle.PagenationWrapper>
  );
}

export default PagenationComponent;
