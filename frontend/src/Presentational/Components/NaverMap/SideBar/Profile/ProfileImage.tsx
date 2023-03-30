import React from 'react';
import * as ProfileImageStyle from './ProfileImage_Style';

function ProfileImage() {
  return (
    <ProfileImageStyle.ProfileImageWrapper>
      <ProfileImageStyle.ProfileImageBorder>
        <ProfileImageStyle.ProfileImage />
      </ProfileImageStyle.ProfileImageBorder>
    </ProfileImageStyle.ProfileImageWrapper>
  );
}

export default ProfileImage;
