import React from 'react';
import { Fade } from 'react-awesome-reveal';
import * as MainStyle from '../../style/MainStyle';
import lightpollution2 from '../../assets/pollution/lightpollution2.png';

function MainLightPollution() {
  return (
    <MainStyle.Container>
      <MainStyle.MainLightPollution>
        <MainStyle.LPLeftBox>
          <Fade direction="left" duration={2000}>
            <MainStyle.LPImgBox1>
              <MainStyle.LPImg src={lightpollution2} />
            </MainStyle.LPImgBox1>
          </Fade>
        </MainStyle.LPLeftBox>
        {/* <MainStyle.LPBox1> */}
        <MainStyle.LPRightBox>
          {/* <MainStyle.LPText1> */}
          <Fade direction="right" duration={2000}>
            <h1>광공해</h1>
          </Fade>
          <Fade direction="right" duration={2300}>
            <h2>인간에 의해 발생된, 과잉 또는 필요 이상의 빛에 의한 공해</h2>
          </Fade>
          {/* </MainStyle.LPText1> */}
        </MainStyle.LPRightBox>
        {/* </MainStyle.LPBox1> */}
      </MainStyle.MainLightPollution>
    </MainStyle.Container>
  );
}

export default MainLightPollution;
