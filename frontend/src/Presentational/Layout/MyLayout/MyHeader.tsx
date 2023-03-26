import React from 'react';
import { MyNav } from './MyHeadStyle';
import { MyButton } from '../../Components/MyComponents/MyStyle';

function Header() {
  return (
    <MyNav>
      <MyButton>나의 도감</MyButton>
      <MyButton>내가 쓴 글</MyButton>
      <MyButton>나의 업적</MyButton>
    </MyNav>
  );
}

export default Header;
