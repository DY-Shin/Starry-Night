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
        <MainStyle.EPLeftBox>
          <Fade direction="left" duration={2000}>
            <MainStyle.EPText1>빛 속으로 떠나는 여행</MainStyle.EPText1>
          </Fade>
          <Fade direction="left" duration={2300}>
            <MainStyle.EPText2>빛이 만들어내는 자연경관의 아름다움으로,</MainStyle.EPText2>
          </Fade>
          <Fade direction="left" duration={2300}>
            <MainStyle.EPText2>지금 바로 출발해보세요.</MainStyle.EPText2>
          </Fade>
        </MainStyle.EPLeftBox>
        <MainStyle.EPRightBox>
          <Fade direction="right" duration={3000}>
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
                  width: '100%',
                }}
              />
              {/* <MainStyle.ImgBox src={MainEp2} /> */}
            </MainStyle.EPImgBox1>
          </Fade>
        </MainStyle.EPRightBox>
        <MainStyle.EPLeftBox2>
          <Fade direction="left" duration={2000}>
            <MainStyle.EPText1>빛 속으로 떠나는 여행</MainStyle.EPText1>
          </Fade>
          <Fade direction="left" duration={2300}>
            <MainStyle.EPText2>빛이 만들어내는 자연경관의 아름다움으로,</MainStyle.EPText2>
          </Fade>
          <Fade direction="left" duration={2300}>
            <MainStyle.EPText2>지금 바로 출발해보세요.</MainStyle.EPText2>
          </Fade>
        </MainStyle.EPLeftBox2>
      </MainStyle.MainExplain>
    </MainStyle.Container>
  );
}

export default MainExplain;
