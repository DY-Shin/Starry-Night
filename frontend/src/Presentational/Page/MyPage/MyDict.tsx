import React from 'react';
import * as MyStyle from '../../Components/MyComponents/MyStyle';
import MyDictSideBar from '../../Layout/MyLayout/MyDict/MyDictSideBar';
import MyDictMainBox from '../../Layout/MyLayout/MyDict/MyDictMainBox';

function MyDict() {
  return (
    <MyStyle.Container>
      <div className="MyDict">
        <h1>MyDict</h1>
        <MyDictSideBar />
        <MyDictMainBox />
      </div>
    </MyStyle.Container>
  );
}

export default MyDict;
