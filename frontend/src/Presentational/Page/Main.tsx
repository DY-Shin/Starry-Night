// eslint-disable-next-line import/no-extraneous-dependencies
import ReactPageScroller from 'react-page-scroller';
import React, { useState } from 'react';
import MainLightPollution from '../Components/MainPage/MainLightPollution';
import MainStar from '../Components/MainPage/MainStar';
import MainTop from '../Components/MainPage/MainTop';
import MainExplain from '../Components/MainPage/MainExplain';
import MainContel from '../Components/MainPage/MainContel';
import Footer from '../Components/MainPage/Footer';
import * as MainStyle from './Main_Style';
import { PageStore } from '../../store';

function Mainpage() {
  const { page, setPage } = PageStore();

  const MoveToTop = () => {
    setPage(0);
  };

  const pageChanage = (number: number) => {
    if (number !== page) {
      setPage(number);
    }
  };

  const arr = [0, 1, 2, 3, 4, 5];

  return (
    <MainStyle.Mainpage>
      <ReactPageScroller pageOnChange={pageChanage} customPageNumber={page}>
        <MainTop />
        <MainExplain />
        <MainLightPollution />
        <MainContel />
        <MainStar />
        <Footer />
      </ReactPageScroller>
      <MainStyle.SlideShow>
        {arr.map((i) =>
          i === page ? (
            <MainStyle.CurrentSlide key={i + 100} />
          ) : (
            <MainStyle.JustSlide
              key={i + 200}
              onClick={() => {
                setPage(i);
              }}
            />
          ),
        )}
      </MainStyle.SlideShow>
      <MainStyle.ScrollTop onClick={MoveToTop} />
    </MainStyle.Mainpage>
  );
}

export default Mainpage;
