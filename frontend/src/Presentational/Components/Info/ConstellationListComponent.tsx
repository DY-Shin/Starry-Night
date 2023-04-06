import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import * as ConstellationStyle from './ConstellationListComponent_Style';
import ConstellationInfoComponent from './ConstellationInfoComponent';

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
   * isModalOpen State값 변경 마다 실행
   */
  useEffect(() => {
    if (isModalOpen) {
      // 아래 부터는 별자리 상세보기 컴포넌트를 모달 형식으로 동적으로 생성
      const customModal = <ConstellationInfoComponent setIsModalOpen={setIsModalOpen} selectId={selectId.current} />;
      const modalContainer = document.createElement('div');
      modalContainer.className = 'customModal';
      document.body.appendChild(modalContainer);
      ReactDOM.render(customModal, modalContainer);
    } else {
      // isModalOpen이 false면 customModal이라는 className을 가진 Element를 찾아서 삭제
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
