import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import * as MyPostBox from '../../../Components/MyComponents/MyPostComponents/MyPostBoxStyle';

const offset = 10;
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

function MyArticle() {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const toggleLeaving = () => setLeaving((prev) => !prev);
  const increaseIndex = () => {
    if (data) {
      if (leaving) return;
      toggleLeaving();
      const totalPosts = data.length;
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
            {data.slice(offset * index, offset * index + offset).map((i) => (
              <MyPostBox.Box
                key={i}
                variants={MyPostBox.boxVariants}
                whileHover="hover"
                initial="normal"
                transition={{ type: 'tween' }}
              >
                {/* onClick={()=>onBoxClicked(movie.id)} */}
                {i}

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
