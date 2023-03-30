/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import Slider, { Settings } from 'react-slick';
import dummy from '../../../db/contellation.json';
import * as TestStyle from './Test_Style';

function Test() {
  const [flag, setFlag] = useState({
    origin: true,
    star: false,
    lined: false,
    illust: false,
  });

  // 버튼 4개
  const setOrigin = () => {
    setFlag({
      origin: true,
      star: false,
      lined: false,
      illust: false,
    });
  };
  const setStar = () => {
    setFlag({
      origin: false,
      star: true,
      lined: false,
      illust: false,
    });
  };
  const setLined = () => {
    setFlag({
      origin: false,
      star: false,
      lined: true,
      illust: false,
    });
  };
  const setIllust = () => {
    setFlag({
      origin: false,
      star: false,
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
    <TestStyle.Container>
      <TestStyle.MainTest>
        <TestStyle.WrapSlide>
          <Slider {...settings}>
            {dummy
              .filter((star) => star.photo.illust && star.photo.lined && star.photo.origin && star.photo.star)
              .map((star) => (
                <>
                  <TestStyle.WrapContel>
                    {flag.origin && <TestStyle.TestImg src={star.photo.origin} />}
                    {flag.star && <TestStyle.TestImg src={star.photo.star} />}
                    {flag.lined && <TestStyle.TestImg src={star.photo.lined} />}
                    {flag.illust && <TestStyle.TestImg src={star.photo.illust} />}
                  </TestStyle.WrapContel>
                  <TestStyle.Name>{star.name}</TestStyle.Name>
                </>
              ))}
          </Slider>
          <TestStyle.WrapMenu>
            <TestStyle.Menu onClick={setOrigin}>천체</TestStyle.Menu>
            <TestStyle.Menu onClick={setStar}>별 이름</TestStyle.Menu>
            <TestStyle.Menu onClick={setLined}>별자리 선</TestStyle.Menu>
            <TestStyle.Menu onClick={setIllust}>별자리 그림</TestStyle.Menu>
          </TestStyle.WrapMenu>
        </TestStyle.WrapSlide>
      </TestStyle.MainTest>
    </TestStyle.Container>
  );
}

export default Test;
