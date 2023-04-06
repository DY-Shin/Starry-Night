import React from 'react';
import { ReactCompareSlider, ReactCompareSliderImage, ReactCompareSliderHandle } from 'react-compare-slider';
import { Fade } from 'react-awesome-reveal';
import * as MainStyle from '../../Page/Main_Style';
import * as ExplainStyle from './MainExplain_Style';

function MainExplain() {
  return (
    <MainStyle.Container>
      <ExplainStyle.MainExplain>
        <ExplainStyle.EPLeftBox>
          <Fade direction="left" duration={1500}>
            <ExplainStyle.EPText1>
              빛 속으로 떠나는 <MainStyle.Highlight>여행</MainStyle.Highlight>
            </ExplainStyle.EPText1>
          </Fade>
          <Fade direction="left" duration={1500}>
            <ExplainStyle.EPText2>빛이 만들어내는 자연경관의 아름다움으로,</ExplainStyle.EPText2>
          </Fade>
          <Fade direction="left" duration={1500}>
            <ExplainStyle.EPText2>지금 바로 출발해보세요.</ExplainStyle.EPText2>
          </Fade>
        </ExplainStyle.EPLeftBox>
        <ExplainStyle.EPRightBox>
          <Fade direction="right" duration={1500}>
            <ExplainStyle.EPImgBox1>
              <ReactCompareSlider
                handle={<ReactCompareSliderHandle style={{ color: '#3282B8' }} linesStyle={{ opacity: 0.5 }} />}
                itemOne={<ReactCompareSliderImage src="assets/mainpage/MainEp3.jpg" alt="Image one" />}
                itemTwo={<ReactCompareSliderImage src="assets/mainpage/MainEp4.png" alt="Image two" />}
                position={50}
                onlyHandleDraggable
                style={{
                  height: '100%',
                  borderRadius: '10px',
                }}
              />
            </ExplainStyle.EPImgBox1>
          </Fade>
        </ExplainStyle.EPRightBox>
        <ExplainStyle.EPLeftBox2>
          <Fade direction="left" duration={1500}>
            <ExplainStyle.EPText1>
              빛 속으로 떠나는 <MainStyle.Highlight>여행</MainStyle.Highlight>
            </ExplainStyle.EPText1>
          </Fade>
          <Fade direction="left" duration={1500}>
            <ExplainStyle.EPText2>빛이 만들어내는 자연경관의 아름다움으로,</ExplainStyle.EPText2>
          </Fade>
          <Fade direction="left" duration={1500}>
            <ExplainStyle.EPText2>지금 바로 출발해보세요.</ExplainStyle.EPText2>
          </Fade>
        </ExplainStyle.EPLeftBox2>
      </ExplainStyle.MainExplain>
    </MainStyle.Container>
  );
}

export default MainExplain;
