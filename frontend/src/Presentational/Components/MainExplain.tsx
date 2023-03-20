import React from 'react';
import { ReactCompareSlider, ReactCompareSliderImage, ReactCompareSliderHandle } from 'react-compare-slider';
import { Fade } from 'react-awesome-reveal';
import * as MainStyle from '../../style/MainStyle';
import MainEp1 from '../../assets/mainpage/MainEp1.jpg';
import MainEp2 from '../../assets/mainpage/MainEp2.jpg';

function MainExplain() {
  return (
    <MainStyle.Container>
      <MainStyle.MainExplain>
        <MainStyle.EPBox1>
          <Fade direction="left" duration={2000}>
            <h1>어둠 속으로 떠나는 천체관측 프로젝트</h1>
          </Fade>
          <Fade direction="left" duration={2300}>
            <h1>광공해가 제한하는 도시의 별</h1>
          </Fade>
          <Fade direction="left" duration={2600}>
            <h1>우리가 지켜야 할 어둠</h1>
          </Fade>
        </MainStyle.EPBox1>
        <Fade direction="right" duration={3000}>
          <MainStyle.EPBox1>
            <MainStyle.EPImgBox1>
              {/* <MainStyle.ImgBox src={MainEp1} /> */}
              <ReactCompareSlider
                handle={<ReactCompareSliderHandle style={{ color: '#3282B8' }} linesStyle={{ opacity: 0.5 }} />}
                itemOne={<ReactCompareSliderImage src={MainEp1} alt="Image one" />}
                itemTwo={<ReactCompareSliderImage src={MainEp2} alt="Image two" />}
                position={50}
                onlyHandleDraggable
                style={{
                  height: '100%',
                  // width: 'auto',
                }}
              />
              {/* <MainStyle.ImgBox src={MainEp2} /> */}
            </MainStyle.EPImgBox1>
          </MainStyle.EPBox1>
        </Fade>
      </MainStyle.MainExplain>
    </MainStyle.Container>
  );
}

export default MainExplain;
