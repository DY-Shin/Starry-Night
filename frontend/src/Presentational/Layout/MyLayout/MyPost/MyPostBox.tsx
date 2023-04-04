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
              <MyPostBox.Box key={i} variants={MyPostBox.boxVariants} whileHover="hover" initial="normal">
                {i}
                <MyPostBox.PostInfo variants={MyPostBox.PostInfoVariants} />
              </MyPostBox.Box>
            ))}
          </MyPostBox.Row>
        </AnimatePresence>
      </MyPostBox.Slider>
    </MyPostBox.SliderWrapper>
  );
}

export default MyArticle;
