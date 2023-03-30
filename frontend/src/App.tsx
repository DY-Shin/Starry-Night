import React from 'react';
import { Routes, Route } from 'react-router-dom';
import * as appStyle from './App_Style';
import Main from './Presentational/Page/Main';
import NotFound from './Presentational/Common/Components/MainPage/NotFound';
// import { GlobalStyle } from './Action/GlobalStyle';

import NaverMap from './Presentational/Page/NaverMap/NaverMapPage';
import MyPage from './Presentational/Page/MyPage/MyProfile';
import MyDict from './Presentational/Page/MyPage/MyDict';
import MyPost from './Presentational/Page/MyPage/MyPost';
import MyReward from './Presentational/Page/MyPage/MyReward';

function App() {
  return (
    <appStyle.AppContainer>
      {/* <GlobalStyle /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mypage/dict" element={<MyDict />} />
        <Route path="/mypage/post" element={<MyPost />} />
        <Route path="/mypage/reward" element={<MyReward />} />
        <Route path="/map" element={<NaverMap />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </appStyle.AppContainer>
  );
}

export default App;
