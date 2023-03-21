import React, { useState } from 'react';
import Slider, { Settings } from 'react-slick';
import { ReactCompareSlider, ReactCompareSliderImage, ReactCompareSliderHandle } from 'react-compare-slider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as MainStyle from '../../style/MainStyle';

function MainStar() {
  const [ImgNum, setImgNum] = useState(1);
  const settings: Settings = {
    dots: false,
    infinite: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    speed: 500,
    // autoplaySpeed: 5000,
    cssEase: 'linear',
    // rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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
      <MainStyle.MainStar>
        <MainStyle.WrapSlideImg>
          {/* <MainStyle.WrapImg> */}
          <Slider {...settings}>
            {arr.map((i) => (
              <MainStyle.STImg key={i} src={`assets/stars/star${i}.jpg`} onClick={() => onClickImg(i)} />
            ))}
          </Slider>
          {/* </MainStyle.WrapImg> */}
          <MainStyle.SelectedStar>
            <ReactCompareSlider
              handle={<ReactCompareSliderHandle style={{ color: '#3282B8' }} linesStyle={{ opacity: 0.5 }} />}
              itemOne={<ReactCompareSliderImage src={`assets/stars/star${ImgNum}.jpg`} alt="Image one" />}
              itemTwo={<ReactCompareSliderImage src={`assets/pictures/picture${ImgNum}.jpg`} alt="Image two" />}
              position={50}
              onlyHandleDraggable
              style={{
                // height: '100%',
                // width: '100%',
                height: '100px',
                // objectFit: 'cover',
              }}
            />
          </MainStyle.SelectedStar>
        </MainStyle.WrapSlideImg>
      </MainStyle.MainStar>
    </MainStyle.Container>
  );
}

export default MainStar;
