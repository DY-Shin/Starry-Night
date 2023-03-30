import React from 'react';
import * as MyStyle from '../../Components/MyComponents/MyStyle';
import MyGlobal from '../../Components/MyComponents/MyGlobalStyle';
import MyHeader from '../../Layout/MyLayout/MyHeader';
import * as MyBadge from '../../Components/MyBadge';

function MyReward() {
  return (
    <MyStyle.Container>
      <MyGlobal />
      <MyHeader />
      <MyBadge.RewardContainer>
        <MyBadge.Badge>
          곰 두마리가 <br /> 북쪽에 있어
        </MyBadge.Badge>
        <MyBadge.Badge>
          낮에는 꽃잎 <br /> 밤에는 별빛
        </MyBadge.Badge>
        <MyBadge.Badge>
          은하에 흐르는 <br /> 한여름밤의 꿈
        </MyBadge.Badge>
        <MyBadge.Badge>
          낙엽에 적혀진 <br /> 영웅의 이야기
        </MyBadge.Badge>
      </MyBadge.RewardContainer>
      <MyBadge.RewardContainer>
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
      </MyBadge.RewardContainer>
    </MyStyle.Container>
  );
}

export default MyReward;
