/* eslint-disable no-undef */
import React, { useState, useEffect, useRef } from 'react';
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from 'react-icons/md';
import { Root, createRoot } from 'react-dom/client';
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

function WriteCustomModal({
  setModalOpen,
  firstCenter,
}: {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  firstCenter: naver.maps.Coord | undefined;
}) {
  return <WritePost firstCenter={firstCenter} setModalOpen={setModalOpen} />;
}

function AddFavoriteCustomModal({
  setModalOpen,
  firstCenter,
  updateHandler,
}: {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  firstCenter: naver.maps.Coord | undefined;
  updateHandler: () => void;
}) {
  return <AddFavorite firstCenter={firstCenter} setModalOpen={setModalOpen} updateHandler={updateHandler} />;
}

function PagenationComponent(props: propsType) {
  const { currentPage, setCurrentPage, totalPage, map, text, updateHandler, type } = props;
  const [isModalOpen, setModalOpen] = useState(false);

  /*
   * modalContainer : createRoot() 메서드가 실행될 div 엘리먼트에 대한 참조
   */
  const modalContainer = useRef(document.createElement('div')).current;
  modalContainer.className = 'customModal';

  /*
   * root : createRoot() 메서드가 실행된 레퍼런스
   */
  const postRoot = useRef<null | Root>(null);
  const favoirteRoot = useRef<null | Root>(null);

  function moveNextPage() {
    setCurrentPage(currentPage + 1);
  }

  function movePrevPage() {
    setCurrentPage(currentPage - 1);
  }

  /*
   * isModalOpen State값 변경 마다 실행
   */
  useEffect(() => {
    if (isModalOpen) {
      document.body.appendChild(modalContainer);

      if (type === 'post') {
        if (!postRoot.current) {
          postRoot.current = createRoot(modalContainer);
        }
        postRoot.current.render(<WriteCustomModal setModalOpen={setModalOpen} firstCenter={map?.getCenter()} />);
      } else {
        if (!favoirteRoot.current) {
          favoirteRoot.current = createRoot(modalContainer);
        }
        favoirteRoot.current.render(
          <AddFavoriteCustomModal
            firstCenter={map?.getCenter()}
            setModalOpen={setModalOpen}
            updateHandler={updateHandler}
          />,
        );
      }
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
