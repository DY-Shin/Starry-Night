import React from 'react';
import { Link, useMatch } from 'react-router-dom';
import { Container, DictButton } from './MyDictSideBarStyle';

function Dict() {
  const myDictMatch = useMatch('/mypage/dict');
  return (
    <Container>
      <DictButton>
        <Link to="/mypage/dict">전체 </Link>
      </DictButton>
      <DictButton>
        <Link to="/mypage/dict/nor">북쪽 </Link>
      </DictButton>
      <DictButton>
        <Link to="/mypage/dict/spr">봄철 </Link>
      </DictButton>
      <DictButton>
        <Link to="/mypage/dict/sum">여름철 </Link>
      </DictButton>
      <DictButton>
        <Link to="/mypage/dict/aut">가을철 </Link>
      </DictButton>
      <DictButton>
        <Link to="/mypage/dict/win">겨울철 </Link>
      </DictButton>
      <DictButton>
        <Link to="/mypage/dict/sol">황도 </Link>
      </DictButton>
    </Container>
  );
}

export default Dict;
