import React from 'react';
import { Fade } from 'react-awesome-reveal';
import * as MainStyle from '../../../style/MainStyle';
import * as PolluStyle from './MainLightPollution_Style';
import lightpollution2 from '../../../assets/pollution/lightpollution2.png';

function MainLightPollution() {
  return (
    <MainStyle.Container>
      <PolluStyle.MainLightPollution>
        <PolluStyle.LPLeftBox>
          <Fade direction="left" duration={2000}>
            <PolluStyle.LPImgBox1>
              <PolluStyle.LPImg src={lightpollution2} />
            </PolluStyle.LPImgBox1>
          </Fade>
        </PolluStyle.LPLeftBox>
        {/* <MainStyle.LPBox1> */}
        <PolluStyle.LPRightBox>
          {/* <MainStyle.LPText1> */}
          <Fade direction="right" duration={2000}>
            <PolluStyle.LPText1>광공해가 제한하는 도시의 별</PolluStyle.LPText1>
          </Fade>
          <Fade direction="right" duration={2300}>
            <PolluStyle.LPText2>인간에 의해 발생된, 과잉 또는 필요 이상의 빛에 의한 공해</PolluStyle.LPText2>
          </Fade>
          {/* </MainStyle.LPText1> */}
        </PolluStyle.LPRightBox>
        {/* </MainStyle.LPBox1> */}
      </PolluStyle.MainLightPollution>
    </MainStyle.Container>
  );
}

export default MainLightPollution;
