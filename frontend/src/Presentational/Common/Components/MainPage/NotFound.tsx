/* eslint-disable import/no-useless-path-segments */
import React from 'react';
import Header from './../../../Components/MainPage/Header';
import * as NotFountStyle from './NotFound_Style';
import * as HeaderStyle from '../../../Components/MainPage/Header_Style';
import logo from '../../../../Assets/logo/logo6.png';
import NotFoundLogo from '../../../../Assets/NotFound/NotFound.png';
import NotFoundTxt from '../../../../Assets/NotFound/NotFoundText.png';

function NotFound() {
  return (
    <NotFountStyle.Back>
      <NotFountStyle.WrapLogo>
        <HeaderStyle.NavLogo to="/">
          <HeaderStyle.LogoImg src={logo} />
        </HeaderStyle.NavLogo>
      </NotFountStyle.WrapLogo>
      <NotFountStyle.AstImg src={NotFoundLogo} />
      <NotFountStyle.TextImg src={NotFoundTxt} />
    </NotFountStyle.Back>
  );
}

export default NotFound;
