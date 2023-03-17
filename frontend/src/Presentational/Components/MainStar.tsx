import React from 'react';
import * as MainStyle from '../../style/MainStyle';
import img2 from '../../assets/stars/star1.jpg';

function MainStar() {
  const arr = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= 28; i++) {
    arr.push(i);
  }
  console.log(img2);
  return (
    <MainStyle.Container>
      <MainStyle.MainStar>
        주위 별자리
        {arr.map((i) => (
          <MainStyle.ImgBox key={i} src={require`../../assets/stars/star${i}.jpg`} />
          // <MainStyle.ImgBox key={i} src={img2} />

          // eslint-disable-next-line global-require
          // <MainStyle.Img src={('../../assets/stars/star1.jpg')} />
        ))}
      </MainStyle.MainStar>
    </MainStyle.Container>
  );
}

export default MainStar;
