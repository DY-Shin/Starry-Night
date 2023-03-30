import styled from 'styled-components';
import { motion } from 'framer-motion';

export const RewardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 45%;
  width: 100%;
`;
export const Badge = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: flex;
  font-size: 1.5rem;
  color: whitesmoke;
  align-items: center;
  justify-content: center;
  background: #016040;
  border-radius: 50%;
  border-color: pink;
  border-width: 3px;
  border-style: solid;
`;
