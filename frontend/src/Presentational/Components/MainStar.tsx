import React from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as MainStyle from '../../style/MainStyle';

function MainStar() {
  const settings: Settings = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    rtl: true,
  };

  const settings2: Settings = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: 'linear',
  };

  const arr = [];
  const arr2 = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= 14; i++) {
    arr.push(`assets/stars/star${i}.jpg`);
  }
  // eslint-disable-next-line no-plusplus
  for (let j = 15; j <= 28; j++) {
    arr2.push(`assets/stars/star${j}.jpg`);
  }
  // console.log(img2);
  return (
    <MainStyle.Container>
      <MainStyle.MainStar>
        주위 별자리
        <MainStyle.WrapSlide>
          <Slider {...settings}>
            {arr.map((i) => (
              <MainStyle.WrapImg>
                <MainStyle.ImgBox key={i} src={i} />
              </MainStyle.WrapImg>
            ))}
          </Slider>
        </MainStyle.WrapSlide>
        <MainStyle.WrapSlide>
          <Slider {...settings2}>
            {arr2.map((i) => (
              <MainStyle.WrapImg>
                <MainStyle.ImgBox key={i} src={i} />
              </MainStyle.WrapImg>
            ))}
          </Slider>
        </MainStyle.WrapSlide>
      </MainStyle.MainStar>
    </MainStyle.Container>
  );
}

export default MainStar;
