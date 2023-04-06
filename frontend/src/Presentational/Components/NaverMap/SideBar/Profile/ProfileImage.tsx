import React from 'react';
import * as ProfileImageStyle from './ProfileImage_Style';
import { UserStore } from '../../../../../store';

function ProfileImage() {
  /*
   * profileImageUrl : Zustand Store에 저장된 로그인 유저 프로필 사진 링크
   */
  const { profileImageUrl } = UserStore();

  return (
    <ProfileImageStyle.ProfileImageWrapper className="ImageWrapper">
      <ProfileImageStyle.ProfileBorderDiv>
        <ProfileImageStyle.ProfileImageBorder className="border">
          {profileImageUrl !== 'null' ? (
            <ProfileImageStyle.ProfileMypageLink to="/mypage">
              <ProfileImageStyle.ProfileImage url={profileImageUrl} className="login" />
            </ProfileImageStyle.ProfileMypageLink>
          ) : (
            <ProfileImageStyle.ProfileImage url="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53474/atom_profile_01.jpg" />
          )}
        </ProfileImageStyle.ProfileImageBorder>
      </ProfileImageStyle.ProfileBorderDiv>
    </ProfileImageStyle.ProfileImageWrapper>
  );
}

export default ProfileImage;
