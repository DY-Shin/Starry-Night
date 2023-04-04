import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Slider = styled.div`
  position: relative;
  background-color: aliceblue;
  margin-right: 4.5em;
  margin-left: 4.5em;
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
    x: window.outerWidth + 10,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -window.outerWidth - 10,
  },
};

export const Box = styled(motion.div)`
  background-color: navy;
  color: white;
  font-size: 50px;
  height: 200px;
`;
