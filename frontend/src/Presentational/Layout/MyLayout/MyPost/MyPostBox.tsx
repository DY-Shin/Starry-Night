import React, { useState, useEffect } from 'react';
import { AnimatePresence, useScroll } from 'framer-motion';
import { PathMatch, useMatch, useNavigate } from 'react-router-dom';
import Slider, { Settings } from 'react-slick';
import * as MyPostBox from '../../../Components/MyComponents/MyPostComponents/MyPostBoxStyle';
import * as MyPageApi from '../../../../Action/Modules/MyPage/MyPage';
import { UserStore } from '../../../../store';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function MyArticle() {
  const offset = 10;

  const { id } = UserStore();

  const [userPostInfo, setUserPostInfo] = useState<null | MyPageApi.UserPostInfos>(null);

  useEffect(() => {
    const getUserPostInfo = async () => {
      const request = await MyPageApi.getUserPostInfo(id);
      console.log('request', request);
      setUserPostInfo(request);
    };
    getUserPostInfo();
  }, []);

  if (userPostInfo != null) {
    console.log(userPostInfo[0].images[0]);
  }

  const [index, setIndex] = useState(0);

  const [leaving, setLeaving] = useState(false);

  const toggleLeaving = () => setLeaving((prev) => !prev);

  const increaseIndex = () => {
    if (userPostInfo) {
      if (leaving) return;
      toggleLeaving();
      const totalPosts = userPostInfo.length;
      const maxIndex = Math.ceil(totalPosts / offset) - 1;
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };

  const navigate = useNavigate();
  const postMatch: PathMatch<string> | null = useMatch('/posts/:id');
  console.log('postmatvch', postMatch);
  console.log('postmatid', postMatch?.params.id);
  const { scrollY } = useScroll();

  const onBoxClicked = (postId: number) => {
    navigate(`/posts/${postId}`);
  };

  const onOverlayClick = () => navigate('/mypage/posts');
  const clickedPost = postMatch?.params.id && userPostInfo?.find((post) => `${post.id}` === postMatch.params.id);
  console.log('clickedPost', clickedPost);

  const [ImgNum, setImgNum] = useState(0);
  const settings: Settings = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    speed: 400,
    cssEase: 'linear',
  };

  const onClickImg = (target: number) => {
    setImgNum(target);
  };

  if (userPostInfo != null) {
    console.log(userPostInfo[0].images.length);
  }

  const arr = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i <= 2; i++) {
    arr.push(i);
  }

  return (
    <MyPostBox.SliderWrapper>
      <MyPostBox.SliderClickZone onClick={increaseIndex} />
      <MyPostBox.PostSlider>
        <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
          <MyPostBox.Row
            variants={MyPostBox.rowVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: 'tween', duration: 1 }}
            key={index}
          >
            {userPostInfo?.slice(offset * index, offset * index + offset).map((post) => (
              <MyPostBox.Box
                key={post.id}
                layoutId={`${post.id}`}
                onClick={() => onBoxClicked(post.id)}
                variants={MyPostBox.boxVariants}
                whileHover="hover"
                initial="normal"
                transition={{ type: 'tween' }}
                bgPhoto={post.images[0] ? post.images[0].url : 'https://j8d206.p.ssafy.io/api/datafiles/8'}
              >
                <MyPostBox.PostInfo variants={MyPostBox.PostInfoVariants}>
                  <h5>
                    날짜 : {post.createdDate.substring(0, 10)}
                    <br />
                    위치 : {post.lng.toFixed(4)} / {post.lat.toFixed(4)}
                    <br />
                    {post.constellationTags[0] ? `별자리 : ${post.constellationTags[0].name}` : null}
                  </h5>
                </MyPostBox.PostInfo>
              </MyPostBox.Box>
            ))}
          </MyPostBox.Row>
        </AnimatePresence>
      </MyPostBox.PostSlider>
      <AnimatePresence>
        {postMatch ? (
          <>
            <MyPostBox.Overlay onClick={onOverlayClick} exit={{ opacity: 0 }} animate={{ opacity: 1 }} />
            <MyPostBox.BigPost style={{ top: scrollY.get() + 100 }} layoutId={postMatch.params.postId}>
              {clickedPost && (
                <>
                  <MyPostBox.BigCover>
                    {clickedPost.images && clickedPost.images.length > 0 ? (
                      <MyPostBox.WrapSlide>
                        <Slider {...settings}>
                          {arr.map((i) =>
                            i === ImgNum ? (
                              <MyPostBox.WrapImg key={i}>
                                <MyPostBox.STimg
                                  src={
                                    clickedPost.images[i]
                                      ? clickedPost.images[i].url
                                      : 'https://j8d206.p.ssafy.io/api/datafiles/8'
                                  }
                                  onClick={() => onClickImg(i)}
                                />
                              </MyPostBox.WrapImg>
                            ) : (
                              <MyPostBox.WrapImg key={i}>
                                <MyPostBox.STimg
                                  src={
                                    clickedPost.images[i]
                                      ? clickedPost.images[i].url
                                      : 'https://j8d206.p.ssafy.io/api/datafiles/8'
                                  }
                                />
                              </MyPostBox.WrapImg>
                            ),
                          )}
                        </Slider>
                      </MyPostBox.WrapSlide>
                    ) : (
                      <MyPostBox.WrapImg>
                        <MyPostBox.STimg2 src="https://j8d206.p.ssafy.io/api/datafiles/8" />
                      </MyPostBox.WrapImg>
                    )}
                  </MyPostBox.BigCover>
                  <MyPostBox.BigLikes>💖{clickedPost.postLikeCount}</MyPostBox.BigLikes>
                  <MyPostBox.BigContent>{clickedPost.content}</MyPostBox.BigContent>
                  <MyPostBox.BigInfos>
                    🌏 위도 : N {clickedPost.lat.toFixed(4)} / 경도 : E {clickedPost.lng.toFixed(4)}
                  </MyPostBox.BigInfos>
                  <MyPostBox.BigDates>📅 {clickedPost.createdDate.substring(0, 10)}</MyPostBox.BigDates>
                  <MyPostBox.BigCons>
                    {' '}
                    {clickedPost.constellationTags[0] ? `🌠 ${clickedPost.constellationTags[0].name} 🚀` : `🔮`}
                  </MyPostBox.BigCons>
                </>
              )}
            </MyPostBox.BigPost>
          </>
        ) : null}
      </AnimatePresence>
      <MyPostBox.SliderClickZone onClick={increaseIndex} />
    </MyPostBox.SliderWrapper>
  );
}

export default MyArticle;
