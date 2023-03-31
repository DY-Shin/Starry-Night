import React from 'react';
import { Link, useMatch } from 'react-router-dom';
import { Container, DictButton } from './MyDictSideBarStyle';
import { MyStar } from '../MyStyle';

function Dict() {
  const myDictMatch = useMatch('/mypage/dict');
  const myBeiMatch = useMatch('/mypage/dict/nor');
  const myChunMatch = useMatch('/mypage/dict/spr');
  const myXiaMatch = useMatch('/mypage/dict/sum');
  const myQiuMatch = useMatch('/mypage/dict/aut');
  const myDongMatch = useMatch('/mypage/dict/win');
  const mySolMatch = useMatch('/mypage/dict/sol');
  return (
    <Container>
      <div>
        <Link to="/mypage/dict" style={{ textDecoration: 'none' }}>
          <DictButton>
            {myDictMatch && <MyStar />}전체{myDictMatch && <MyStar />}
          </DictButton>
        </Link>

        <Link to="/mypage/dict/nor" style={{ textDecoration: 'none' }}>
          <DictButton>
            {myBeiMatch && <MyStar />}북쪽{myBeiMatch && <MyStar />}
          </DictButton>
        </Link>

        <Link to="/mypage/dict/spr" style={{ textDecoration: 'none' }}>
          <DictButton>
            {myChunMatch && <MyStar />}봄철{myChunMatch && <MyStar />}
          </DictButton>
        </Link>

        <Link to="/mypage/dict/sum" style={{ textDecoration: 'none' }}>
          <DictButton>
            {myXiaMatch && <MyStar />}여름철 {myXiaMatch && <MyStar />}
          </DictButton>
        </Link>

        <Link to="/mypage/dict/aut" style={{ textDecoration: 'none' }}>
          <DictButton>
            {myQiuMatch && <MyStar />}가을철{myQiuMatch && <MyStar />}
          </DictButton>
        </Link>

        <Link to="/mypage/dict/win" style={{ textDecoration: 'none' }}>
          <DictButton>
            {myDongMatch && <MyStar />}겨울철{myDongMatch && <MyStar />}
          </DictButton>
        </Link>

        <Link to="/mypage/dict/sol" style={{ textDecoration: 'none' }}>
          <DictButton>
            {mySolMatch && <MyStar />}황도{mySolMatch && <MyStar />}
          </DictButton>
        </Link>
      </div>
    </Container>
  );
}

export default Dict;
