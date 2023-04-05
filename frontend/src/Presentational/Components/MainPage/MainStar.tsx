import React, { useState } from 'react';
import Slider, { Settings } from 'react-slick';
import { ReactCompareSlider, ReactCompareSliderImage, ReactCompareSliderHandle } from 'react-compare-slider';
import { Fade } from 'react-awesome-reveal';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as MainStyle from '../../Page/Main_Style';
import * as StarStyle from './MainStar_Style';

function MainStar() {
  const [ImgNum, setImgNum] = useState(1);
  const settings: Settings = {
    dots: false,
    infinite: true,
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    speed: 400,
    cssEase: 'linear',
  };

  const onClickImg = (target: number) => {
    setImgNum(target);
  };

  const arr = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= 28; i++) {
    arr.push(i);
  }

  return (
    <MainStyle.Container>
      <StarStyle.MainStar>
        <ReactCompareSlider
          handle={<ReactCompareSliderHandle style={{ color: '#0f4c75' }} linesStyle={{ opacity: 0.5 }} />}
          itemOne={<ReactCompareSliderImage src={`assets/stars/star${ImgNum}.jpg`} alt="Image one" />}
          itemTwo={<ReactCompareSliderImage src={`assets/pictures/picture${ImgNum}.jpg`} alt="Image two" />}
          position={50}
          onlyHandleDraggable
          style={{
            width: '40vw',
            height: '100%',
            border: '2px solid #0f4c75',
            backgroundColor: 'rgba(50, 130, 184, 0.3)',
            // filter: 'drop-shadow(0 0 3px rgba(50, 130, 184, 1))',
            borderStyle: 'solid',
            borderRadius: '10px',
            borderColor: 'whitesmoke',
            boxShadow: '0 0 7px 0px rgba(52, 152, 219, 0.8) inset, 0 0 70px 2px rgba(52, 152, 219)',
          }}
        />

        <StarStyle.WrapSlide>
          <Slider {...settings}>
            {arr.map((i) =>
              i === ImgNum ? (
                <StarStyle.WrapImg key={i}>
                  <StarStyle.STimg2 src={`assets/stars/star${i}.jpg`} onClick={() => onClickImg(i)} />
                </StarStyle.WrapImg>
              ) : (
                <StarStyle.WrapImg key={i}>
                  <StarStyle.STimg src={`assets/stars/star${i}.jpg`} onClick={() => onClickImg(i)} />
                </StarStyle.WrapImg>
              ),
            )}
          </Slider>
        </StarStyle.WrapSlide>
      </StarStyle.MainStar>
    </MainStyle.Container>
  );
}

export default MainStar;
