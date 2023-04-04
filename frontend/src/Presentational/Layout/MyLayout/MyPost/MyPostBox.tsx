import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import * as MyPostBox from '../../../Components/MyComponents/MyPostComponents/MyPostBoxStyle';
import * as MyPageApi from '../../../../Action/Modules/MyPage/MyPage';
import { UserStore } from '../../../../store';

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

  console.log(userPostInfo);

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
  // const bigMovieMatch = useRouteMatch<{ movieId: string }>("/movies/:movieId");
  // console.log(bigMovieMatch);

  // const onBoxClicked = (movieId: number) => {
  //   history.push(`/movies/${movieId}`);
  // };

  return (
    <MyPostBox.SliderWrapper onClick={increaseIndex}>
      <MyPostBox.Slider>
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
                variants={MyPostBox.boxVariants}
                whileHover="hover"
                initial="normal"
                transition={{ type: 'tween' }}
                bgPhoto={post.image[0].url}
              >
                {/* onClick={()=>onBoxClicked(movie.id)} */}
                {post.content}

                <MyPostBox.PostInfo variants={MyPostBox.PostInfoVariants} />
              </MyPostBox.Box>
            ))}
          </MyPostBox.Row>
        </AnimatePresence>
      </MyPostBox.Slider>
      {/* <AnimatePresence>
        {bigMovieMatch ? (
          <motion.div
            layoutId={bigMovieMatch.params.movieId}
            style={{
              position: 'absolute',
              width: '40vw',
              height: '80vh',
              backgroundColor: 'red',
              top: 50,
              left: 0,
              right: 0,
              margin: '0 auto',
            }}
          />
        ) : null}
      </AnimatePresence> */}
    </MyPostBox.SliderWrapper>
  );
}

export default MyArticle;
