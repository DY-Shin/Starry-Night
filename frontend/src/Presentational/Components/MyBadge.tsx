import styled from 'styled-components';
import { motion } from 'framer-motion';

export const RewardContainer = styled.div`
  /* display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 45%;
  width: 100%; */
  display: grid;
  justify-content: stretch;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 5em;
  margin-top: 2em;
  /* place-items: center start; */
`;
export const CompletedBadge = styled(motion.div)`
  position: relative;
  width: 200px;
  height: 200px;
  display: flex;
  font-size: 1.5rem;
  color: whitesmoke;
  align-items: center;
  justify-content: center;
  background: green;
  border-radius: 50%;
  /* border-color: pink; */
  border-width: 3px;
  border-style: solid;
  justify-self: center;
`;
export const NotCompletedBadge = styled(motion.div)`
  position: relative;
  width: 200px;
  height: 200px;
  display: flex;
  font-size: 1.5rem;
  color: whitesmoke;
  align-items: center;
  justify-content: center;
  background: red;
  border-radius: 50%;
  /* border-color: pink; */
  border-width: 3px;
  border-style: solid;
  justify-self: center;
`;

export const modal = styled.div`
  z-index: 20;
  position: absolute;
  top: 9em;
`;
