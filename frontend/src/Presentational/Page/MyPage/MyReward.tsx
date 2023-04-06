/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-pascal-case */
/* eslint-disable no-undef */
/* eslint-disable operator-assignment */
/* eslint-disable array-callback-return */
/* eslint-disable no-plusplus */
import React, { useEffect, useState } from 'react';
import * as MyStyle from '../../Components/MyComponents/MyStyle';
import MyGlobal from '../../Components/MyComponents/MyGlobalStyle';
import MyHeader from '../../Layout/MyLayout/MyHeader';
// import * as MypageAPI from '../../../Action/Modules/MyPage/MyPage';
import * as MyBadge from '../../Components/MyBadge';
import api from '../../Components/api';
import { UserStore } from '../../../store';

function MyReward() {
  const [rewards, setRewards] = useState([]);
  const { id } = UserStore();

  // 유저의 도전과제별 현황 가져오기
  const getOneStars = async (userid: number) => {
    await api.get(`/users/${userid}/achievements`, { withCredentials: true }).then((res) => {
      // console.log(res.data.data);
      setRewards(res.data.data);
    });
  };

  useEffect(() => {
    getOneStars(id);
  }, []);

  const renderRewards = (): JSX.Element[] => {
    const filteredRewards = rewards.map((reward: any) => {
      if (!reward.completed) {
        return (
          <MyBadge.Badge key={reward.id}>
            {reward.name}
            <MyBadge.modal>
              {reward.completedConstellationCount}/{reward.totalConstellationCount}
            </MyBadge.modal>
          </MyBadge.Badge>
        );
      }
      return (
        <MyBadge.Badge key={reward.id}>
          {reward.name}
          <MyBadge.modal>{`${reward.completedConstellationCount}/${reward.totalConstellationCount}`}</MyBadge.modal>
          <MyBadge.Check size="36" />
        </MyBadge.Badge>
      );
    });

    return filteredRewards;
  };

  return (
    <MyStyle.Container>
      <MyGlobal />
      <MyHeader />
      <MyBadge.RewardContainer>{renderRewards()}</MyBadge.RewardContainer>
    </MyStyle.Container>
  );
}

export default MyReward;
