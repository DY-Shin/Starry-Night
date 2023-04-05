import styled, { keyframes } from 'styled-components';

const moveUp = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const CloseBtn = styled.div`
  width: 50px;
  height: 30px;
  border: 2px solid #ffffff36;
  border-radius: 10px;
  margin: 15px auto 5px auto;
  text-align: center;
  line-height: 30px;
  color: #ffffff36;
  cursor: pointer;
  :hover {
    border: 2px solid #ffffffb0;
    color: #ffffffb0;
  }
`;

export const ConstellationExplanText = styled.p`
  color: #ffffffdf;
  margin: 5px;
  white-space: pre-line;
`;

export const ConstellationExplanWrapper = styled.div`
  width: 90%;
  height: 60%;
  border: 2px solid #ffffff36;
  border-radius: 10px;
  margin: 0 auto 0 auto;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ConstellationName = styled.p`
  color: #ffffffdf;
  font-size: 30px;
  text-align: center;
  /* margin-left: auto; */
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  justify-content: center;
  align-items: center;
`;

export const DetailWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* display: flex;
  justify-content: center;
  align-items: center; */
`;

export const ImageItem = styled.img<{ link: string }>`
  content: url(${(props) => props.link});
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  &:first-child {
    border-radius: 0 5px 5px 0;
  }
  &:nth-child(2) {
    border-radius: 5px 0 0 5px;
    transform: rotateY(180deg);
  }
`;

export const ImageBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  transform-origin: left;
  transform-style: preserve-3d;
  background: #000;
  transition: 1s;
  border-radius: 0 5px 5px 0;
  box-shadow: 17px 20px 20px rgba(192, 191, 192, 0.25);
`;

export const CardWrapper = styled.div`
  margin: 5% auto auto auto;
  position: relative;
  width: 500px;
  height: 400px;
  background: #1a1712;
  transform-style: preserve-3d;
  transform: perspective(1000px);
  box-shadow: 10px 20px 40px rgba(192, 191, 192, 0.25);
  border-radius: 0 5px 5px 0;
  transition: 1s;
  :hover {
    transform: translateX(50%);
    .imgBox {
      transform: rotateY(-180deg);
    }
    .icon {
      /* visibility: hidden; */
      opacity: 0;
      transition: opacity 1s;
    }
  }

  .icon {
    margin: 10px 0 0 45%;
    animation: ${moveUp} 2s ease-in-out infinite;
    opacity: 1;
    transition: opacity 1s;
  }
`;

export const BlackBG = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.808);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 100;
`;
