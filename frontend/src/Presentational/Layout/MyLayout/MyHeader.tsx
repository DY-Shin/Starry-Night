import React from 'react';
import { Link, useMatch } from 'react-router-dom';
import { MyNav, MyNavContainer } from './MyHeadStyle';
import { MyButton, MyDia } from '../../Components/MyComponents/MyStyle';

function Header() {
  const myProfileMatch = useMatch('/mypage');
  const myDictMatch = useMatch('/mypage/dict/*');
  const myPostMatch = useMatch('/mypage/posts');
  const myRewardMatch = useMatch('/mypage/reward');
  return (
    <MyNav>
      <MyNavContainer>
        <Link to="/mypage/dict/" style={{ textDecoration: 'none' }}>
          <MyButton>나의 도감 {myDictMatch && <MyDia />}</MyButton>
        </Link>

        <Link to="/mypage/posts" style={{ textDecoration: 'none' }}>
          <MyButton>내가 쓴 글 {myPostMatch && <MyDia />}</MyButton>
        </Link>

        <Link to="/mypage/reward" style={{ textDecoration: 'none' }}>
          <MyButton>
            나의 업적
            {myRewardMatch && <MyDia />}
          </MyButton>
        </Link>
      </MyNavContainer>
      <div>
        <Link to="/mypage" style={{ textDecoration: 'none' }}>
          내 프로필 {myProfileMatch && <MyDia />}{' '}
        </Link>
      </div>
    </MyNav>
  );
}

export default Header;
