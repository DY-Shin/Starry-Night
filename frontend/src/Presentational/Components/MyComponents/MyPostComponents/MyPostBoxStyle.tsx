import { motion } from 'framer-motion';
import styled from 'styled-components';

export const SliderWrapper = styled.div`
  width: 100%;
  height: 90%;
  display: flex;

  flex-direction: column;
`;

export const Slider = styled.div`
  position: relative;
  margin-right: 4.5em;
  margin-left: 4.5em;
  width: 90%;
  height: 100%;
`;

export const SliderClickZone = styled.div`
  position: flex;
  /* background-color: white; */
  height: 25%;
  width: 100%;
`;

export const Row = styled(motion.div)`
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
export const Box = styled(motion.div)<{ bgPhoto: string }>`
  background-color: navy;
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
  background-position: center center;
  color: white;
  font-size: 50px;
  height: 200px;
`;

export const boxVariants = {
  normal: {
    scale: 1,
  },
  hover: {
    cursor: 'pointer',
    scale: 1.2,
    y: -50,
    transition: {
      delay: 0.3,
      duration: 0.5,
      type: 'tween',
    },
  },
};

export const PostInfo = styled(motion.div)`
  padding: 10px;
  background-color: grey;
  opacity: 0;
  position: absolute;
  width: 100%;
  bottom: 0;

  h5 {
    font-size: 10px;
    color: black;
  }
  h4 {
    font-size: 12px;
    color: midnightblue;
  }
  cursor: pointer;
`;

export const PostInfoVariants = {
  hover: {
    opacity: 1,
    transition: {
      delay: 0.3,
      duaration: 0.5,
      type: 'tween',
    },
  },
};

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
`;

export const BigPost = styled(motion.div)`
  position: absolute;
  width: 40vw;
  height: 80vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 15px;
  overflow: hidden;
`;

export const BigCover = styled.div`
  width: 100%;
  background-size: cover;
  background-position: center center;
  height: 400px;
`;

export const BigTitle = styled.h3`
  color: red;
  padding: 20px;
  font-size: 46px;
  position: relative;
  top: -80px;
`;

export const BigContent = styled.p`
  padding: 20px;
  position: relative;
  top: -80px;
  color: indigo;
`;
