import React from 'react';
import { Routes, Route } from 'react-router-dom';
import * as appStyle from './App_Style';
import Main from './Presentational/Page/Main';
import NotFound from './Presentational/Common/Components/MainPage/NotFound';
// import { GlobalStyle } from './Action/GlobalStyle';

import NaverMap from './Presentational/Page/NaverMap/NaverMapPage';

function App() {
  return (
    <appStyle.AppContainer>
      {/* <GlobalStyle /> */}
      <Routes>
        {/* <Route path="/" element={<MainPage />} */}
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/map" element={<NaverMap />} />
      </Routes>
    </appStyle.AppContainer>
  );
}

export default App;
