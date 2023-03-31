import React from 'react';
import Slider, { Settings } from 'react-slick';
import * as PostStyle from './BoardPost_Style';
import 'slick-carousel/slick/slick';
import * as BoardPostAPI from '../../../../../Action/Modules/NaverMap/BoardPost';

type propsType = {
  data: BoardPostAPI.dataType;
};

function BoardPost(props: propsType) {
  const { data } = props;
  const carouselSetting: Settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <PostStyle.PostWrapper className="PostWrapper">
      <PostStyle.PostHead>{data.title}</PostStyle.PostHead>
      <Slider {...carouselSetting}>
        {data?.images?.map((value) => {
          return <PostStyle.ImageWrapper link={value.url} key={value.id} />;
        })}
      </Slider>
      <PostStyle.PostContent>
        이것은 50자일것입니다. 끼예예예예예예예예예옝예예예예예예예예예예예예예예예예예예예예예예옝예엑
      </PostStyle.PostContent>
      <PostStyle.StarTagArea>
        {data?.constellationTags?.map((starValue) => {
          return <PostStyle.StarTag>#{starValue.name.split('자리')[0]}</PostStyle.StarTag>;
        })}
      </PostStyle.StarTagArea>
    </PostStyle.PostWrapper>
  );
}

export default BoardPost;
