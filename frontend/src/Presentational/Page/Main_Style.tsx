import styled from 'styled-components';
import { BsArrowUpCircleFill } from 'react-icons/bs';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import bg from '../../assets/mainpage/space.jpg';

export const Mainpage = styled.div`
  overflow-x: hidden; // 가로 스크롤 숨기기
  /* padding-left: 4.5em;
  padding-right: 4.5em; */
  overflow-y: hidden;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: rgba(187, 23, 23, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 13, 13, 0.3);
    border-radius: 6px;
  }
`;
export const Container = styled.div`
  width: 100%;
  max-width: 100vw;
  max-height: 100vh;
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
`;

// 스크롤 맨 위로 올리는 버튼
export const ScrollTop = styled(BsArrowUpCircleFill)`
  position: fixed;
  bottom: 5%;
  right: 5%;
  z-index: 1;
  width: 30px;
  height: 30px;
  color: white;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

// 슬라이드 번호
export const SlideShow = styled.div`
  position: fixed;
  display: flex;
  left: 3%;
  top: 40%;
  z-index: 1;
  flex-direction: column;
`;

export const CurrentSlide = styled(AiFillStar)`
  margin-top: 5px;
  width: 2em;
  height: 2em;
  color: white;
  filter: drop-shadow(0 0 3px rgba(255, 255, 255, 1));
`;
export const JustSlide = styled(AiOutlineStar)`
  margin-top: 5px;
  color: white;
  width: 2em;
  height: 2em;
  cursor: pointer;
  &:hover {
    filter: drop-shadow(0 0 3px rgba(255, 255, 255, 1));
  }
`;

// 텍스트 강조
export const Highlight = styled.span`
  filter: drop-shadow(0 0 3px rgba(255, 255, 255, 1));
  text-decoration: underline;
`;
