import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import MyProfile from './Presentational/Page/MyPage/MyProfile';
import MyDict from './Presentational/Page/MyPage/MyDict';
import MyPosts from './Presentational/Page/MyPage/MyPost';
import MyReward from './Presentational/Page/MyPage/MyReward';
import Header from './Presentational/Common/Layout/Header/Header';
import Footer from './Presentational/Common/Layout/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Router>
    <Header />
    <Routes>
      <Route path="/mypage" element={<MyProfile />} />
      <Route path="/mypage/dict" element={<MyDict />} />
      <Route path="/mypage/posts" element={<MyPosts />} />
      <Route path="/mypage/reward" element={<MyReward />} />
    </Routes>
    <Footer />
  </Router>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
