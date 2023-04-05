/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import * as appStyle from './App_Style';
import Main from './Presentational/Page/Main';
import NotFound from './Presentational/Common/Components/MainPage/NotFound';
import { GlobalStyle } from './Action/GlobalStyle';

import NaverMap from './Presentational/Page/NaverMap/NaverMapPage';
import MyProfile from './Presentational/Page/MyPage/MyProfile';
import MyDict from './Presentational/Page/MyPage/MyDict/MyDictMain';
import MyBei from './Presentational/Page/MyPage/MyDict/MyDictBei';
import MyChun from './Presentational/Page/MyPage/MyDict/MyDictChun';
import MyXia from './Presentational/Page/MyPage/MyDict/MyDictXia';
import MyQiu from './Presentational/Page/MyPage/MyDict/MyDictQiu';
import MyDong from './Presentational/Page/MyPage/MyDict/MyDictDong';
import MySol from './Presentational/Page/MyPage/MyDict/MyDictSol';
import MyPost from './Presentational/Page/MyPage/MyPost';
import MyReward from './Presentational/Page/MyPage/MyReward';
import PrivateRoute from './Action/Hooks/Mainpage/PrivateRoute';

function App() {
  return (
    <appStyle.AppContainer>
      <GlobalStyle />
      <Routes>
        {/* 로그인 필요 없음 */}
        <Route path="/" element={<Main />} />
        {/* 로그인 필요 */}
        {/* 마이페이지 */}
        <Route element={<PrivateRoute isMypage={true} />}>
          <Route path="/mypage" element={<MyProfile />} />
          <Route path="/mypage/dict" element={<MyDict />} />
          <Route path="/mypage/dict/nor" element={<MyBei />} />
          <Route path="/mypage/dict/spr" element={<MyChun />} />
          <Route path="/mypage/dict/sum" element={<MyXia />} />
          <Route path="/mypage/dict/aut" element={<MyQiu />} />
          <Route path="/mypage/dict/win" element={<MyDong />} />
          <Route path="/mypage/dict/sol" element={<MySol />} />
          <Route path="/mypage/posts" element={<MyPost />} />
          <Route path="/posts/:postId" element={<MyPost />} />
          <Route path="/mypage/reward" element={<MyReward />} />
        </Route>
        {/* 지도로 가는 거 */}
        {/* <Route element={<PrivateRoute isMypage={false} />}> */}
        <Route path="/map" element={<NaverMap />} />
        {/* </Route> */}

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </appStyle.AppContainer>
  );
}

export default App;
