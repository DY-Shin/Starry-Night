import React, { useEffect } from 'react';
import MainLightPollution from '../Components/MainLightPollution';
import MainStar from '../Components/MainStar';
import MainTop from '../Components/MainTop';
import MainExplain from '../Components/MainExplain';
import * as MainStyle from '../../style/MainStyle';

function Mainpage() {
  const handleScrollAnimation = (e: Event) => {
    console.log(e);
  };

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      handleScrollAnimation(e);
    });

    return () => {
      window.removeEventListener('scroll', (e) => {
        handleScrollAnimation(e);
      });
    };
  }, []);
  return (
    <MainStyle.Mainpage>
      <MainTop />
      <MainExplain />
      <MainLightPollution />
      <MainStar />
    </MainStyle.Mainpage>
  );
}

export default Mainpage;

// "빛 속으로 떠나는 여행: 광공해 천체관측 프로젝트"
// "도시에서 볼 수 없는 별들: 광공해를 이용한 천체관측"
// "어둠 속에서 빛나는 세계: 광공해와 함께하는 우주 탐험"
// "광공해가 우리에게 미치는 영향과 함께하는 천체관측 프로젝트" 1
// "우주를 더 깊이 이해하기 위한 광공해 연구"
// "도시에서 느끼지 못한 우주의 아름다움: 광공해 천체관측 프로젝트" 1
// "우리가 알지 못했던 우주의 신비를 밝히는 광공해 연구"
// "광공해가 제한하는 도시의 별, 그리고 광확산을 줄이기 위한 노력" 1
// "우리의 눈으로 볼 수 있는 최대한의 우주: 광공해 천체관측 프로젝트" 1
// "우리가 지켜야 할 어둠, 그리고 광공해를 줄이기 위한 노력" 1
// "광공해가 낳는 어둠의 미래: 천체관측 프로젝트를 통해 알아보는 광해방지의 중요성"
// "어둠을 지키는 새로운 운동: 광공해와 싸우는 별들"
// "어둠의 위기, 우주의 위기: 광공해가 가져올 수 있는 우주의 혼란과 그 해결책"
// "광공해, 터널의 끝에 떠오르는 어둠: 지구, 우주, 그리고 미래"
// "어둠이 사라지면 별들이 빛나고, 우주가 보인다: 광공해 극복을 위한 노력"
// "우리가 지키지 않으면 사라질 어둠: 광공해와 싸우는 우주의 영웅들"
// "어둠이 닥치는 우주, 미래를 위한 지구의 선택: 광공해 문제의 중요성"
// "어둠을 지키는 것은 우주를 지키는 것: 광공해와 함께하는 우주 탐사의 새로운 방향"
// "어둠 속에서 빛나는 별들: 지구의 미래를 위한 광공해 문제의 해결책"
// "어둠의 위협, 새로운 기회: 광공해를 이용한 우주 연구의 가능성"
// "어둠을 지키는 우주 탐사: 광공해를 줄이는 천체관측 프로젝트"
// "광공해와 싸우는 새로운 운동: 천체관측을 통한 어둠의 보호"
// "지구를 지켜라, 우주의 어둠을 지키는 방법: 천체관측과 광공해 문제"
// "어둠 속으로 떠나는 천체관측 프로젝트: 광공해 극복을 위한 새로운 도전"
// "광공해와 함께하는 우주 탐험: 천체관측을 통한 지구 환경 보호"
// "광공해, 그리고 천체관측: 어둠의 보호와 우주의 미래"
// "어둠과 빛, 그리고 우주 탐사: 천체관측 프로젝트의 의미"
// "우주 탐사의 새로운 방향: 광공해 문제에 대한 천체관측 프로젝트"
// "우리가 할 수 있는 것, 천체관측으로 이끄는 광공해 해결책"
// "어둠과 빛, 지구와 우주: 천체관측을 통한 광공해 대처 전략"
