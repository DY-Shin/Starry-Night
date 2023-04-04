import { motion } from 'framer-motion';
import styled from 'styled-components';

export const SliderWrapper = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
`;

export const Slider = styled.div`
  position: relative;
  margin-right: 4.5em;
  margin-left: 4.5em;
  width: 100%;
  height: 100%;
`;

export const Row = styled(motion.div)`
  margin-top: 10%;
  display: grid;
  gap: 10px;
  position: absolute;
  width: 100%;
  grid-template-columns: repeat(5, 2fr);
`;

export const rowVariants = {
  hidden: {
    x: window.outerWidth + 30,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -window.outerWidth - 30,
  },
};

export const Box = styled(motion.div)`
  background-color: navy;
  color: white;
  font-size: 50px;
  height: 200px;
  position: relative;
`;

export const boxVariants = {
  normal: {
    scale: 1,
  },
  hover: {
    scale: 1.2,
    y: -50,
    transition: {
      delay: 0.3,
      duration: 0.1,
      type: 'tween',
    },
  },
};

export const PostInfo = styled(motion.div)`
  padding: 20px;
  background-color: grey;
  opacity: 0;
  position: absolute;
  width: 100%;
  bottom: 0;
`;

export const PostInfoVariants = {
  hover: {
    opacity: 1,
    transition: {
      delay: 0.3,
      duaration: 0.1,
      type: 'tween',
    },
  },
};
