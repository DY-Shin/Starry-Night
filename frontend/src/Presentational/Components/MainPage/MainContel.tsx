/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import Slider, { Settings } from 'react-slick';
import dummy from '../../../db/contellation.json';
import * as ContelStyle from './MainContel_Style';

function MainContel() {
  const [flag, setFlag] = useState({
    origin: true,
    lined: false,
    illust: false,
  });

  // 버튼 4개
  const setOrigin = () => {
    setFlag({
      origin: true,
      lined: false,
      illust: false,
    });
  };
  const setLined = () => {
    setFlag({
      origin: false,
      lined: true,
      illust: false,
    });
  };
  const setIllust = () => {
    setFlag({
      origin: false,
      lined: false,
      illust: true,
    });
  };

  const settings: Settings = {
    dots: false,
    infinite: true,
    arrows: true,
    slidesToShow: 1,
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <ContelStyle.Container>
      <ContelStyle.MainContel>
        <ContelStyle.WrapSlide>
          <Slider {...settings}>
            {dummy
              .filter((star) => star.photo.illust && star.photo.lined && star.photo.origin && star.photo.star)
              .map((star) => (
                <>
                  <ContelStyle.WrapContel>
                    {flag.origin && <ContelStyle.TestImg src={star.photo.origin} />}
                    {flag.lined && <ContelStyle.TestImg src={star.photo.lined} />}
                    {flag.illust && <ContelStyle.TestImg src={star.photo.illust} />}
                  </ContelStyle.WrapContel>
                  <ContelStyle.Name>{star.name}</ContelStyle.Name>
                </>
              ))}
          </Slider>
          <ContelStyle.WrapMenu>
            {flag.origin ? (
              <ContelStyle.SelMenu>천체</ContelStyle.SelMenu>
            ) : (
              <ContelStyle.Menu onClick={setOrigin}>천체</ContelStyle.Menu>
            )}
            {flag.lined ? (
              <ContelStyle.SelMenu>별자리 선</ContelStyle.SelMenu>
            ) : (
              <ContelStyle.Menu onClick={setLined}>별자리 선</ContelStyle.Menu>
            )}
            {flag.illust ? (
              <ContelStyle.SelMenu>별자리 그림</ContelStyle.SelMenu>
            ) : (
              <ContelStyle.Menu onClick={setIllust}>별자리 그림</ContelStyle.Menu>
            )}
          </ContelStyle.WrapMenu>
        </ContelStyle.WrapSlide>
      </ContelStyle.MainContel>
    </ContelStyle.Container>
  );
}

export default MainContel;
