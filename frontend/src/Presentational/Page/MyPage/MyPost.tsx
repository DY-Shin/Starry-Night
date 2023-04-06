import React from 'react';
import * as MyStyle from '../../Components/MyComponents/MyStyle';
import MyGlobal from '../../Components/MyComponents/MyGlobalStyle';
import MyHeader from '../../Layout/MyLayout/MyHeader';
// import MySearchBox from '../../Layout/MyLayout/MyPost/MySearchBox';
import MyArticle from '../../Layout/MyLayout/MyPost/MyPostBox';

function MyPost() {
  return (
    <MyStyle.Container>
      <MyGlobal />
      <MyHeader />
      {/* <MySearchBox /> */}
      <MyArticle />
    </MyStyle.Container>
  );
}

export default MyPost;
