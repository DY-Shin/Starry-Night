// 원본
// import React from 'react';

// function App() {
//   return (
//     <div className="App">
//       StarryNight
//       <div>FrontEnd</div>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import Mypage from './Presentational/Page/MypageMain';
import Header from './Presentational/Common/Layout/Header/Header';
import Footer from './Presentational/Common/Layout/Footer/Footer';

// import MyProfile from './Presentational/Layout/MyProfile';

function App() {
  return (
    <div className="App">
      <Header />
      <Mypage />
      <Footer />
    </div>
  );
}

export default App;
