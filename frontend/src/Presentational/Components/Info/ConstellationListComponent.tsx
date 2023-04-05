import React, { useState, useCallback, useEffect, useRef } from 'react';
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const selectId = useRef(0);

  useEffect(() => {
    if (isModalOpen) {
      const customModal = <ConstellationInfoComponent setIsModalOpen={setIsModalOpen} selectId={selectId.current} />;
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

  // 가, 나, 다 순으로 오름차순 정렬
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
