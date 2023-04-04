import React from 'react';
import * as ProfileImageStyle from './ProfileImage_Style';
import { UserStore } from '../../../../../store';

function ProfileImage() {
  const { profileImageUrl } = UserStore();
  return (
    <ProfileImageStyle.ProfileImageWrapper>
      <ProfileImageStyle.ProfileImageBorder>
        {profileImageUrl !== 'null' ? (
          <ProfileImageStyle.ProfileImage url={profileImageUrl} />
        ) : (
          <ProfileImageStyle.ProfileImage url="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53474/atom_profile_01.jpg" />
        )}
      </ProfileImageStyle.ProfileImageBorder>
    </ProfileImageStyle.ProfileImageWrapper>
  );
}

export default ProfileImage;
