import React, { useState } from 'react';
import Slider, { Settings } from 'react-slick';
import { ReactCompareSlider, ReactCompareSliderImage, ReactCompareSliderHandle } from 'react-compare-slider';
import { Fade } from 'react-awesome-reveal';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as MainStyle from '../../Page/Main_Style';
import * as StarStyle from './MainStar_Style';
import NotFound from '../../Common/Components/MainPage/NotFound';

function MainStar() {
  const [ImgNum, setImgNum] = useState(1);
  const settings: Settings = {
    dots: false,
    infinite: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    speed: 400,
    // autoplaySpeed: 5000,
    cssEase: 'linear',
    // rtl: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const onClickImg = (target: number) => {
    console.log(target);
    setImgNum(target);
  };

  const arr = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= 28; i++) {
    // arr.push(`assets/stars/star${i}.jpg`);
    arr.push(i);
  }

  return (
    <MainStyle.Container>
      <Fade duration={2000}>
        <StarStyle.MainStar>
          <ReactCompareSlider
            handle={<ReactCompareSliderHandle style={{ color: 'white' }} linesStyle={{ opacity: 0.5 }} />}
            itemOne={<ReactCompareSliderImage src={`assets/stars/star${ImgNum}.jpg`} alt="Image one" />}
            itemTwo={<ReactCompareSliderImage src={`assets/pictures/picture${ImgNum}.jpg`} alt="Image two" />}
            position={50}
            onlyHandleDraggable
            style={{
              width: '40vw',
              height: '100%',
              border: '2px solid white',
              backgroundColor: 'rgba(50, 130, 184, 0.3)',
              filter: 'drop-shadow(0 0 3px rgba(255, 255, 255, 1))',
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
      </Fade>
    </MainStyle.Container>
  );
}

export default MainStar;
