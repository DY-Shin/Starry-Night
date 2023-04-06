import { motion } from 'framer-motion';
import styled from 'styled-components';
import Slider from 'react-slick';

export const SliderWrapper = styled.div`
  width: 100%;
  height: 90%;
  display: flex;

  flex-direction: column;
`;

export const PostSlider = styled.div`
  position: relative;
  margin-right: 4.5em;
  margin-left: 4.5em;
  width: 90%;
  height: 100%;
`;

export const SliderClickZone = styled.div`
  position: flex;
  /* background-color: white; */
  height: 30%;
  width: 100%;
  cursor: pointer;
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
    cursor: 'help',
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
    color: #001b6d;
  }
  h4 {
    font-size: 12px;
    color: midnightblue;
  }
  cursor: help;
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
  background-color: #001823;
`;

export const BigCover = styled.div`
  width: 100%;
  background-size: cover;
  background-position: center center;
  height: 400px;
`;

export const BigLikes = styled.div`
  color: #de7316;
  text-align: right;
  padding: 5px 15px;
  font-size: 15px;
  position: relative;
  top: -130px;
`;

export const BigContent = styled.div`
  padding: 5px 20px;
  position: relative;
  top: -120px;
  color: #d2b600;
  font-size: 30px;
  height: 120px;
  border-bottom: 2px solid #0f4c75;
  filter: drop-shadow(0 0 3px rgba(50, 130, 184, 0.7));
`;

export const BigInfos = styled.p`
  padding: 5px 20px;
  position: relative;
  top: -100px;
  color: #066f2e;
  font-size: 15px;
`;

export const BigDates = styled.p`
  padding: 5px 20px;
  position: relative;
  top: -100px;
  color: #2056dd;
  font-size: 15px;
`;

export const BigCons = styled.div`
  padding: 5px 15px;
  text-align: right;
  position: relative;
  top: -130px;
  color: #5267ce;
  font-size: 15px;
`;

// image slider from MainStar

export const WrapSlide = styled.div`
  width: 60vw;
  margin-top: 1rem;
`;

export const WrapImg = styled(Slider)``;

export const STimg = styled.img.attrs((props) => ({
  src: props.src,
}))`
  padding: 0 3px;
  height: 300px;
  border-top: 2px solid #0f4c75;
  border-bottom: 2px solid #0f4c75;
  object-fit: contain;
  cursor: grab;
  &:active {
    cursor: grabbing;
  }
`;

export const STimg2 = styled.img.attrs((props) => ({
  src: props.src,
}))`
  height: 300px;
  border-top: 2px solid #0f4c75;
  border-bottom: 2px solid #0f4c75;
  filter: drop-shadow(0 0 3px rgba(50, 130, 184, 1));
  object-fit: contain;
`;
