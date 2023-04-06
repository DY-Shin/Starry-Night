import styled, { keyframes } from 'styled-components';

const animate = keyframes`
    0%{
        transform: rotate(0deg);
        filter: hue-rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
        filter: hue-rotate(360deg);
    }
`;

const animateText = keyframes`
    from {
    filter: hue-rotate(0deg);
  }
  to {
    filter: hue-rotate(360deg);
  }
`;

export const LoadingPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #000;
  & > :first-child {
    height: 100%;
    position: absolute;
    z-index: 1;
  }
`;

export const LoadingLoader = styled.div<{ link: string }>`
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin: auto;
  top: 40%;
  z-index: 1;

  ::before {
    content: '';
    position: absolute;
    top: 6px;
    left: 6px;
    right: 6px;
    bottom: 6px;
    background: #000;
    border-radius: 50%;
    z-index: 1000;
    background-image: url(${(props) => props.link});
    background-size: contain;
    background-position: center;
    animation: none;
  }

  ::after {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background: linear-gradient(45deg, transparent, transparent 40%, #e5f403);
    border-radius: 50%;
    z-index: 1000;
    z-index: 50;
    filter: blur(30px);
    animation: ${animate} 2s linear infinite;
  }
`;

export const LoadingText = styled.p`
  position: absolute;
  font-size: 50px;
  font-weight: 800;
  left: 44.5%;
  top: 51%;
  font-family: 'PyeongChang-Bold', sans-serif;
  color: transparent;
  background: linear-gradient(0deg, transparent, transparent 0%, #e5f403);
  animation: ${animateText} 2s infinite;
  background-clip: text;
  -webkit-background-clip: text;
  z-index: 1000;
  margin: 0;
`;

export const LoadingLogo = styled.div<{ link: string }>`
  width: 230px;
  height: 230px;
  border-radius: 50%;
  border: 1px solid white;
  position: absolute;
  z-index: 2;
  background-image: url(${(props) => props.link});
  background-size: contain;
  top: 43%;
  left: 43%;
`;
