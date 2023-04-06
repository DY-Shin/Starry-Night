import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import * as MyStyle from '../../Components/MyComponents/MyStyle';
import MyGlobal from '../../Components/MyComponents/MyGlobalStyle';
import * as MyProfileBox from '../../Components/MyComponents/MyProfileComponent/MyProfileBox';
import { UserStore } from '../../../store';
import * as MyPageApi from '../../../Action/Modules/MyPage/MyPage';
import Header from '../../Layout/MyLayout/MyMainHeader';

function MyProfile() {
  const { id } = UserStore();

  const [userPageInfo, setUserPageInfo] = useState<null | MyPageApi.UserPageInfo>(null);

  useEffect(() => {
    const getUserPageInfo = async () => {
      const request = await MyPageApi.getUserPageInfo(id);
      // console.log('request', request);
      setUserPageInfo(request);
    };
    getUserPageInfo();
  }, []);

  return (
    <MyStyle.Container>
      <Outlet />
      <MyGlobal />
      <Header />
      <MyProfileBox.ProfileMainContainer>
        <MyProfileBox.ProfileSubContainer>
          <MyProfileBox.Photo src={userPageInfo?.profileImageUrl} />
          <MyProfileBox.Nick>{userPageInfo?.name}</MyProfileBox.Nick>
        </MyProfileBox.ProfileSubContainer>
        <MyProfileBox.ProfileSubContainer>
          <MyProfileBox.ProfileButtonContainer>
            <MyProfileBox.MyButton to="/mypage/dict/all">나의 도감</MyProfileBox.MyButton>

            <MyProfileBox.MyProfileContent>
              <h1>
                {userPageInfo?.completedConstellationCount}/{userPageInfo?.totalConstellationCount}
              </h1>
            </MyProfileBox.MyProfileContent>
          </MyProfileBox.ProfileButtonContainer>
          <MyProfileBox.ProfileButtonContainer>
            <MyProfileBox.MyButton to="/mypage/posts">내가 쓴 글</MyProfileBox.MyButton>

            <MyProfileBox.MyProfileContent>
              <h1>{userPageInfo?.postCount}개</h1>
            </MyProfileBox.MyProfileContent>
          </MyProfileBox.ProfileButtonContainer>
          <MyProfileBox.ProfileButtonContainer>
            <MyProfileBox.MyButton to="/mypage/reward">나의 업적</MyProfileBox.MyButton>

            <MyProfileBox.MyProfileContent>
              <h1>
                {userPageInfo?.completedAchievementCount}/{userPageInfo?.totalAchievementCount}
              </h1>
            </MyProfileBox.MyProfileContent>
          </MyProfileBox.ProfileButtonContainer>
        </MyProfileBox.ProfileSubContainer>
      </MyProfileBox.ProfileMainContainer>
    </MyStyle.Container>
  );
}

export default MyProfile;
