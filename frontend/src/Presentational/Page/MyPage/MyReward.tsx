/* eslint-disable react/jsx-pascal-case */
/* eslint-disable no-undef */
/* eslint-disable operator-assignment */
/* eslint-disable array-callback-return */
/* eslint-disable no-plusplus */
import React, { useEffect, useState } from 'react';
import * as MyStyle from '../../Components/MyComponents/MyStyle';
import MyGlobal from '../../Components/MyComponents/MyGlobalStyle';
import MyHeader from '../../Layout/MyLayout/MyHeader';
import * as MyBadge from '../../Components/MyBadge';
import api from '../../Components/api';
import Header from '../../Components/MainPage/Header';

function MyReward() {
  const [rewards, setRewards] = useState([]);
  const [stars, setStars] = useState<{ [key: string]: [number, number] }>({});

  // 도전과제 목록 가져오기
  const getReward = async () => {
    await api.get(`/achievements`, { withCredentials: true }).then((res) => {
      setRewards(res.data.data);
    });
  };

  // 도전과제별 별자리 가져오기
  const getOneStars = async (id: string) => {
    await api.get(`/achievements/${id}/constellations`, { withCredentials: true }).then((res) => {
      const temps = res.data.data;
      const count = temps.filter((star: { completed: any }) => star.completed).length;
      const total = temps.length;
      setStars((prevStars) => ({ ...prevStars, [id]: [total, count] }));
    });
  };

  useEffect(() => {
    getReward();
    for (let i = 1; i < 6; i++) {
      getOneStars(`${i}`);
    }
  }, []);

  const renderRewards = (): JSX.Element[] => {
    const filteredRewards = rewards.map((reward: any) => {
      const [total, count] = stars[reward.id] || [0, 0];
      if (!reward.completed) {
        return (
          <MyBadge.NotCompletedBadge key={reward.id}>
            {reward.name}
            <MyBadge.modal>{`${count}/${total}`}</MyBadge.modal>
          </MyBadge.NotCompletedBadge>
        );
      }
      return (
        <MyBadge.CompletedBadge key={reward.id}>
          {reward.name}
          <MyBadge.modal>{`${count}/${total}`}</MyBadge.modal>
        </MyBadge.CompletedBadge>
      );
    });

    return filteredRewards;
  };

  return (
    <MyStyle.Container>
      <MyGlobal />
      {/* <Header /> */}
      <MyHeader />
      <MyBadge.RewardContainer>{renderRewards()}</MyBadge.RewardContainer>
    </MyStyle.Container>
  );
}

export default MyReward;
