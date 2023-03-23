import React from 'react';
import * as MyProfileImg from './MyProfileImgStyle';

function ProfileImage() {
  return (
    <MyProfileImg.ProfileImageWrapper>
      <MyProfileImg.ProfileImageBorder>
        <MyProfileImg.ProfileImage />
      </MyProfileImg.ProfileImageBorder>
    </MyProfileImg.ProfileImageWrapper>
  );
}

export default ProfileImage;
