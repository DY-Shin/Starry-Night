import React from 'react';
import * as MyStyle from '../../Components/MyComponents/MyStyle';
import MyGlobal from '../../Components/MyComponents/MyGlobalStyle';

function MyProfile() {
  return (
    <MyStyle.Container>
      <MyGlobal />
      <div className="MyProfile">
        <h1>MyProfile</h1>
      </div>
    </MyStyle.Container>
  );
}

export default MyProfile;
