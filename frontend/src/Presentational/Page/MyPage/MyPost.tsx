import React from 'react';
import * as MyStyle from '../../Components/MyComponents/MyStyle';
import MyGlobal from '../../Components/MyComponents/MyGlobalStyle';
import MyHeader from '../../Layout/MyLayout/MyHeader';
import MySearchBox from '../../Layout/MyLayout/MyPost/MySearchBox';

function MyPost() {
  return (
    <MyStyle.Container>
      <MyGlobal />
      <MyHeader />
      <MySearchBox />
      <div className="MyPost">
        <h1>MyPost</h1>
      </div>
    </MyStyle.Container>
  );
}

export default MyPost;
