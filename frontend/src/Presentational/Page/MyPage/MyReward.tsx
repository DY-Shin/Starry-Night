/* eslint-disable no-undef */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import * as MyStyle from '../../Components/MyComponents/MyStyle';
import MyGlobal from '../../Components/MyComponents/MyGlobalStyle';
import MyHeader from '../../Layout/MyLayout/MyHeader';
import * as MyBadge from '../../Components/MyBadge';
import api from '../../Components/api';
// import { Name } from './../../Components/MainPage/MainContel_Style';

function MyReward() {
  const [rewards, setRewards] = useState([]);

  const getReward = async () => {
    await api.get(`/achievements`, { withCredentials: true }).then((res) => {
      setRewards(res.data.data);
      console.log(res.data.data);
    });
  };

  // const makeReward = async () => {
  //   await api.post(`/achievements` ,{ withCredentials: true }).then((res) => {
  //     setRewards(res.data.data);
  //     console.log(res.data.data);
  //   });
  // };

  useEffect(() => {
    getReward();
  }, []);

  const renderRewards = (): JSX.Element[] => {
    const filteredRewards = rewards.map((reward: any) => {
      if (reward.completed === false) {
        return <MyBadge.Badge key={reward.id}>{reward.name}</MyBadge.Badge>;
      }
      return <MyBadge.Badge>123</MyBadge.Badge>;
    });
    return filteredRewards;
  };

  return (
    <MyStyle.Container>
      <MyGlobal />
      <MyHeader />
      <MyBadge.RewardContainer>{renderRewards()}</MyBadge.RewardContainer>
      {/* <MyBadge.RewardContainer>
        <MyBadge.Badge>
          땅에선 캐롤이 <br /> 하늘에선 별이
        </MyBadge.Badge>
        <MyBadge.Badge>
          멀지만 가까운 <br /> 태양계 가족
        </MyBadge.Badge>
        <MyBadge.Badge>
          천개의 별도 <br /> 첫 관측부터
        </MyBadge.Badge>
        <MyBadge.Badge>
          눈으로 볼 수 <br /> 있는건 다 봤어
        </MyBadge.Badge>
      </MyBadge.RewardContainer> */}
    </MyStyle.Container>
  );
}

export default MyReward;
