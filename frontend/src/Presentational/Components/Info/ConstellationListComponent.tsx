import React from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';
import * as ConstellationStyle from './ConstellationListComponent_Style';

function ConstellationListComponent(props: {
  constellations: {
    id: number;
    name: string;
  }[];
}) {
  const { constellations } = props;
  // 가, 나, 다 순으로 오름차순 정렬
  const sortedConstellations = constellations.sort((a, b) => a.name.localeCompare(b.name));
  return (
    <ConstellationStyle.ConstellationWrapper>
      {sortedConstellations
        ? sortedConstellations.map((item) => {
            return (
              <ConstellationStyle.ConstellationItemWrapper>
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
