import React from 'react';
import * as MainStyle from '../../style/MainStyle';
import lightpollution2 from '../../assets/pollution/lightpollution2.png';

function MainLightPollution() {
  return (
    <MainStyle.Container>
      <MainStyle.MainLightPollution>
        <MainStyle.LPLeftBox>
          <MainStyle.LPBox1>
            <MainStyle.LPImgBox src={lightpollution2} />
          </MainStyle.LPBox1>
        </MainStyle.LPLeftBox>
        {/* <MainStyle.LPBox1> */}
        <MainStyle.LPRightBox>
          <MainStyle.LPText1>
            <h1>광공해</h1>
            <span>인간에 의해 발생된, 과잉 또는 필요 이상의 빛에 의한 공해</span>
          </MainStyle.LPText1>
        </MainStyle.LPRightBox>
        {/* </MainStyle.LPBox1> */}
      </MainStyle.MainLightPollution>
    </MainStyle.Container>
  );
}

export default MainLightPollution;
