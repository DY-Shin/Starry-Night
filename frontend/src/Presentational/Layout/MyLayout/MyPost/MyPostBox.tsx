import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import * as MyPostBox from '../../../Components/MyComponents/MyPostComponents/MyPostBoxStyle';

function MyArticle() {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const toggleLeaving = () => setLeaving((prev) => !prev);
  const increaseIndex = () => {
    if (leaving) return;
    toggleLeaving();
    setIndex((prev) => prev + 1);
  };

  return (
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
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
            <MyPostBox.Box key={i}>{i}</MyPostBox.Box>
          ))}
        </MyPostBox.Row>
      </AnimatePresence>
    </MyPostBox.Slider>
  );
}

export default MyArticle;
