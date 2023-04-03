/* eslint-disable import/no-useless-path-segments */
import React from 'react';
import Header from './../../../Components/MainPage/Header';
import * as NotFountStyle from './NotFound_Style';
import * as HeaderStyle from '../../../Components/MainPage/Header_Style';

function NotFound() {
  return (
    <NotFountStyle.Back>
      <NotFountStyle.WrapLogo>
        <HeaderStyle.NavLogo to="/">
          <HeaderStyle.LogoImg src="assets/logo/logo6.png" />
        </HeaderStyle.NavLogo>
      </NotFountStyle.WrapLogo>
      <NotFountStyle.AstImg src="assets/NotFound/NotFound.png" />
      <NotFountStyle.TextImg src="assets/NotFound/NotFoundText.png" />
    </NotFountStyle.Back>
  );
}

export default NotFound;
