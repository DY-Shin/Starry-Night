import React from 'react';
import * as MyStyle from '../../Components/MyComponents/MyStyle';
import MyGlobal from '../../Components/MyComponents/MyGlobalStyle';

function MyPost() {
  return (
    <MyStyle.Container>
      <MyGlobal />
      <div className="MyPost">
        <h1>MyPost</h1>
      </div>
    </MyStyle.Container>
  );
}

export default MyPost;
