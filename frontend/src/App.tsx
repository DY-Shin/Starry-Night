/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import * as appStyle from './App_Style';
import Main from './Presentational/Page/Main';
import NotFound from './Presentational/Common/Components/MainPage/NotFound';
// import { GlobalStyle } from './Action/GlobalStyle';

import NaverMap from './Presentational/Page/NaverMap/NaverMapPage';
import MyProfile from './Presentational/Page/MyPage/MyProfile';
import MyDict from './Presentational/Page/MyPage/MyDict';
import MyPost from './Presentational/Page/MyPage/MyPost';
import MyReward from './Presentational/Page/MyPage/MyReward';
import PrivateRoute from './Action/Hooks/Mainpage/PrivateRoute';

function App() {
  return (
    <appStyle.AppContainer>
      {/* <GlobalStyle /> */}
      <Routes>
        {/* 로그인 필요 없음 */}
        <Route path="/" element={<Main />} />
        {/* 로그인 필요 */}
        <Route element={<PrivateRoute />}>
          <Route path="/mypage" element={<MyProfile />}>
            <Route path="dict" element={<MyDict />} />
            <Route path="post" element={<MyPost />} />
            <Route path="reward" element={<MyReward />} />
          </Route>
        </Route>
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
