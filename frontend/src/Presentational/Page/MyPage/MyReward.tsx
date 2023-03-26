import React from 'react';
import * as MyStyle from '../../Components/MyComponents/MyStyle';
import MyGlobal from '../../Components/MyComponents/MyGlobalStyle';
import MyHeader from '../../Layout/MyLayout/MyHeader';

function MyBadge() {
  return (
    <MyStyle.Container>
      <MyGlobal />
      <MyHeader />
      <div className="MyBadge">
        <h1>MyReward</h1>
      </div>
    </MyStyle.Container>
  );
}

export default MyBadge;
