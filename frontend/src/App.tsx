import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './Presentational/Page/Main';
import NotFound from './Presentational/Common/Components/MainPage/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
