import React from 'react';
import * as MainStyle from '../../style/MainStyle';

function MainTop() {
  return (
    <MainStyle.Container>
      <MainStyle.MainTop>
        <MainStyle.TopTitle>별 헤는 밤</MainStyle.TopTitle>
        <MainStyle.TopMap
          onClick={() => {
            console.log('별보러가쉴?');
          }}
        >
          별 보러가기
        </MainStyle.TopMap>
      </MainStyle.MainTop>
    </MainStyle.Container>
  );
}

export default MainTop;
