import React from 'react';
import { Route, Routes } from 'react-router-dom';
import * as appStyle from './App_Style';
import { GlobalStyle } from './Action/GlobalStyle';

import NaverMap from './Presentational/Page/NaverMap/NaverMapPage';

function App() {
  return (
    <appStyle.AppContainer>
      <GlobalStyle />
      <Routes>
        {/* <Route path="/" element={<MainPage />} */}
        <Route path="/map" element={<NaverMap />} />
      </Routes>
    </appStyle.AppContainer>
  );
}

export default App;
