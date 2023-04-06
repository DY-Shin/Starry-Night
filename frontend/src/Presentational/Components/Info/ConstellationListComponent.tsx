import React, { useState, useEffect, useRef } from 'react';
import { Root, createRoot } from 'react-dom/client';
import { BsArrowRightCircle } from 'react-icons/bs';
import * as ConstellationStyle from './ConstellationListComponent_Style';
import ConstellationInfoComponent from './ConstellationInfoComponent';

function CustomModal({
  setIsModalOpen,
  selectId,
}: {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectId: React.MutableRefObject<number>;
}) {
  return <ConstellationInfoComponent setIsModalOpen={setIsModalOpen} selectId={selectId.current} />;
}

function ConstellationListComponent(props: {
  constellations: {
    id: number;
    name: string;
  }[];
}) {
  const { constellations } = props;

  /*
   * 모달 닫힘/펼침 상태 State
   */
  const [isModalOpen, setIsModalOpen] = useState(false);

  /*
   * selectId : 현재 선택된 별자리 id 값을 담을 number타입 참조 객체
   */
  const selectId = useRef(0);

  /*
   * modalContainer : createRoot() 메서드가 실행될 div 엘리먼트에 대한 참조
   */
  const modalContainer = useRef(document.createElement('div')).current;
  modalContainer.className = 'customModal';

  /*
   * root : createRoot() 메서드가 실행된 레퍼런스
   */
  const root = useRef<null | Root>(null);

  /*
   * isModalOpen State값 변경 마다 실행
   */
  useEffect(() => {
    if (isModalOpen) {
      document.body.appendChild(modalContainer);

      /*
       * createRoot() 메서드가 처음 실행될 때에만 레퍼런스를 설정하도록 함
       */
      if (!root.current) {
        root.current = createRoot(modalContainer);
      }

      root.current.render(<CustomModal setIsModalOpen={setIsModalOpen} selectId={selectId} />);
    } else {
      const customModal = document.getElementsByClassName('customModal')[0];
      if (customModal) {
        customModal.remove();
      }
    }
  }, [isModalOpen]);

  // 가, 나, 다 순으로 별자리 이름 오름차순 정렬
  const sortedConstellations = constellations.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <ConstellationStyle.ConstellationWrapper>
      {sortedConstellations
        ? sortedConstellations.map((item) => {
            return (
              <ConstellationStyle.ConstellationItemWrapper
                onClick={() => {
                  selectId.current = item.id;
                  setIsModalOpen(true);
                }}
                key={item.name}
              >
                <ConstellationStyle.ConstellationItemText>{item.name}</ConstellationStyle.ConstellationItemText>
                <BsArrowRightCircle size={30} className="icon" />
              </ConstellationStyle.ConstellationItemWrapper>
            );
          })
        : null}
    </ConstellationStyle.ConstellationWrapper>
  );
}

export default ConstellationListComponent;
