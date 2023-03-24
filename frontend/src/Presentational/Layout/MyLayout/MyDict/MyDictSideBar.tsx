import React from 'react';
import { Container, DictNav, DictItem } from './MyDictSideBarStyle';

function Dict() {
  return (
    <Container>
      <DictNav>
        <DictItem>북쪽</DictItem>
        <DictItem>봄철</DictItem>
        <DictItem>여름철</DictItem>
        <DictItem>가을철</DictItem>
        <DictItem>겨울철</DictItem>
        <DictItem>행성</DictItem>
      </DictNav>
    </Container>
  );
}

export default Dict;
