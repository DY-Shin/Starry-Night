import React from 'react';
import * as MyStyle from '../../Components/MyComponents/MyStyle';
import MyGlobal from '../../Components/MyComponents/MyGlobalStyle';

function MyBadge() {
  return (
    <MyStyle.Container>
      <MyGlobal />
      <div className="MyBadge">
        <h1>MyBadge</h1>
      </div>
    </MyStyle.Container>
  );
}

export default MyBadge;
