import React from 'react';
import { Link, useMatch } from 'react-router-dom';
import { MyNav, MyNavContainer } from './MyHeadStyle';
import { MyButton, MyDia } from '../../Components/MyComponents/MyStyle';

function Header() {
  const myProfileMatch = useMatch('/mypage');
  const myDictMatch = useMatch('/mypage/dict');
  const myPostMatch = useMatch('/mypage/posts');
  const myRewardMatch = useMatch('/mypage/reward');
  return (
    <MyNav>
      <MyNavContainer>
        <MyButton>
          <Link to="/mypage/dict">나의 도감 {myDictMatch && <MyDia />}</Link>
        </MyButton>
        <MyButton>
          <Link to="/mypage/posts">내가 쓴 글 {myPostMatch && <MyDia />}</Link>
        </MyButton>
        <MyButton>
          <Link to="/mypage/reward">
            나의 업적
            {myRewardMatch && <MyDia />}
          </Link>
        </MyButton>
      </MyNavContainer>
      <div>
        <Link to="/mypage">내 프로필 {myProfileMatch && <MyDia />} </Link>
      </div>
    </MyNav>
  );
}

export default Header;
