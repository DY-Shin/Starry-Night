/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { GrPrevious, GrFormNext } from 'react-icons/gr';
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from 'react-icons/md';
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
  const [isModalOpen, setModalOpen] = useState(false);

  function moveNextPage() {
    setCurrentPage(currentPage + 1);
  }

  function movePrevPage() {
    setCurrentPage(currentPage - 1);
  }

  useEffect(() => {
    if (isModalOpen) {
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
  }, [isModalOpen]);

  let previousButton;
  let nextButton;
  if (totalPage !== currentPage) {
    if (currentPage === 1) {
      previousButton = <MdOutlineNavigateBefore visibility="hidden" className="icon" />;
    } else {
      previousButton = (
        <MdOutlineNavigateBefore className="icon" onClick={() => movePrevPage()} size={30} color="white" />
      );
    }
    if (totalPage === undefined || totalPage === 0) {
      nextButton = <MdOutlineNavigateNext visibility="hidden" className="icon" />;
    } else {
      nextButton = <MdOutlineNavigateNext className="icon" onClick={() => moveNextPage()} size={30} color="white" />;
    }
  } else {
    if (totalPage > 1 && totalPage === currentPage) {
      previousButton = (
        <MdOutlineNavigateBefore className="icon" onClick={() => movePrevPage()} size={30} color="white" />
      );
    } else {
      previousButton = <MdOutlineNavigateBefore visibility="hidden" className="icon" />;
    }
    nextButton = <MdOutlineNavigateNext visibility="hidden" className="icon" />;
  }

  return (
    <PagenationStyle.PagenationWrapper>
      {previousButton}
      <PagenationStyle.WriteButton onClick={() => setModalOpen(!isModalOpen)}>{text}</PagenationStyle.WriteButton>
      {nextButton}
    </PagenationStyle.PagenationWrapper>
  );
}

export default PagenationComponent;
