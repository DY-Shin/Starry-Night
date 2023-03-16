import React from 'react';
import * as MainStyle from '../../style/MainStyle';
import MainEp1 from '../../assets/mainpage/MainEp1.jpg';
import MainEp2 from '../../assets/mainpage/MainEp2.jpg';

function MainExplain() {
  return (
    <MainStyle.Container>
      <MainStyle.MainExplain>
        <h1>어둠 속으로 떠나는 천체관측 프로젝트</h1>
        <MainStyle.EPImgBox1>
          <MainStyle.ImgBox src={MainEp1} />
          <MainStyle.ImgBox src={MainEp2} />
        </MainStyle.EPImgBox1>
        <h1>광공해가 제한하는 도시의 별</h1>
        <h1>우리가 지켜야 할 어둠</h1>
      </MainStyle.MainExplain>
    </MainStyle.Container>
  );
}

export default MainExplain;
