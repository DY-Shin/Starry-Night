import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import * as MyStyle from '../../Components/MyComponents/MyStyle';
import MyGlobal from '../../Components/MyComponents/MyGlobalStyle';
import * as MyProfileBox from '../../Components/MyComponents/MyProfileComponent/MyProfileBox';
import { UserStore } from '../../../store';
// import MyHeader from '../../Layout/MyLayout/MyHeader';
import * as MyPageApi from '../../../Action/Modules/MyPage/MyPage';

function MyProfile() {
  const { id } = UserStore();

  const [userPageInfo, setUserPageInfo] = useState<null | MyPageApi.UserPageInfo>(null);
  // const [userPageInfo, setUserPageInfo] = useState({});

  useEffect(() => {
    const getUserPageInfo = async () => {
      const request = await MyPageApi.getUserPageInfo(id);
      console.log('request', request);
      setUserPageInfo(request);
    };
    getUserPageInfo();
  }, []);

  return (
    <MyStyle.Container>
      <Outlet />
      <MyGlobal />
      <MyProfileBox.ProfileMainContainer>
        <MyProfileBox.ProfileSubContainer>
          <MyProfileBox.Photo src={userPageInfo?.profileImageUrl} />
          <MyProfileBox.Nick>
            <h1>{userPageInfo?.name}</h1>
          </MyProfileBox.Nick>
        </MyProfileBox.ProfileSubContainer>
        <MyProfileBox.ProfileSubContainer>
          <MyProfileBox.ProfileButtonContainer>
            <Link to="/mypage/dict">
              <MyStyle.MyButton>나의 도감</MyStyle.MyButton>
            </Link>

            <MyProfileBox.MyProfileContent>
              <h1>
                {userPageInfo?.completedConstellationCount}/{userPageInfo?.totalConstellationCount}
              </h1>
            </MyProfileBox.MyProfileContent>
          </MyProfileBox.ProfileButtonContainer>
          <MyProfileBox.ProfileButtonContainer>
            <Link to="/mypage/posts">
              <MyStyle.MyButton>내가 쓴 글 </MyStyle.MyButton>
            </Link>

            <MyProfileBox.MyProfileContent>
              <h1>{userPageInfo?.totalConstellationCount}개</h1>
            </MyProfileBox.MyProfileContent>
          </MyProfileBox.ProfileButtonContainer>
          <MyProfileBox.ProfileButtonContainer>
            <Link to="/mypage/reward">
              <MyStyle.MyButton>나의 업적</MyStyle.MyButton>
            </Link>

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
