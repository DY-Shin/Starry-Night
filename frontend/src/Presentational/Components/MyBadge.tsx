import styled from 'styled-components';
import { motion } from 'framer-motion';
import { BsFillPatchCheckFill } from 'react-icons/bs';

export const Check = styled(BsFillPatchCheckFill)`
  position: absolute;
  /* top: 5px; */
  bottom: 5%;
  right: 15px;
  color: goldenrod;
`;

export const RewardContainer = styled.div`
  display: grid;
  color: black;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 5em;
  margin-top: 3rem;
  padding: 0px 10rem;
`;
export const Badge = styled(motion.div)`
  position: relative;
  width: 200px;
  height: 200px;
  display: flex;
  font-size: 1.5rem;
  /* color: whitesmoke; */
  align-items: center;
  justify-content: center;
  /* background: green; */
  border-radius: 50%;
  /* border-color: pink; */
  background-color: rgba(50, 130, 184, 0.7);
  border-color: #0f4c75;
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
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
  position: absolute;
  border-radius: 10px;
  top: 9em;
  background-color: rgba(50, 130, 184, 0.7);
  border: 3px solid #0f4c75;
`;
