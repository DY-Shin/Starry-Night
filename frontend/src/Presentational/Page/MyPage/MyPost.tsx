import React from 'react';
import * as MyStyle from '../../Components/MyComponents/MyStyle';
import MyGlobal from '../../Components/MyComponents/MyGlobalStyle';
import MyHeader from '../../Layout/MyLayout/MyHeader';

function MyPost() {
  return (
    <MyStyle.Container>
      <MyGlobal />
      <MyHeader />
      <div className="MyPost">
        <h1>MyPost</h1>
      </div>
    </MyStyle.Container>
  );
}

export default MyPost;
