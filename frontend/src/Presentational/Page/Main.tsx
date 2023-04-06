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
import Header from '../Components/MainPage/Header';
import Back from '../Common/Components/MainPage/Back';

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

  return (
    <MainStyle.Mainpage>
      <Back />
      <Header />
      <ReactPageScroller pageOnChange={pageChanage} customPageNumber={page}>
        <MainTop />
        <MainExplain />
        <MainLightPollution />
        <MainContel />
        <MainStar />
        <Footer />
      </ReactPageScroller>
      <MainStyle.SlideShow>
        {page === 0 ? (
          <MainStyle.SelLeftSlide />
        ) : (
          <MainStyle.LeftSlide
            onClick={() => {
              setPage(0);
            }}
          />
        )}
        {page === 1 ? (
          <MainStyle.SelRightSlide />
        ) : (
          <MainStyle.RightSlide
            onClick={() => {
              setPage(1);
            }}
          />
        )}
        {page === 2 ? (
          <MainStyle.SelLeftSlide />
        ) : (
          <MainStyle.LeftSlide
            onClick={() => {
              setPage(2);
            }}
          />
        )}
        {page === 3 ? (
          <MainStyle.SelRightSlide />
        ) : (
          <MainStyle.RightSlide
            onClick={() => {
              setPage(3);
            }}
          />
        )}
        {page === 4 ? (
          <MainStyle.SelLeftSlide />
        ) : (
          <MainStyle.LeftSlide
            onClick={() => {
              setPage(4);
            }}
          />
        )}
        {page === 5 ? (
          <MainStyle.SelRightSlide />
        ) : (
          <MainStyle.RightSlide
            onClick={() => {
              setPage(5);
            }}
          />
        )}
      </MainStyle.SlideShow>
      <MainStyle.ScrollTop onClick={MoveToTop} />
    </MainStyle.Mainpage>
  );
}

export default Mainpage;
