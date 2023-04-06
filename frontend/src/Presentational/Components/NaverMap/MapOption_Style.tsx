import styled from 'styled-components';

export const SpectrumGuide = styled.div`
  position: absolute;
  bottom: 3%;
  right: 0.5%;
  width: 200px;
  height: 50px;
  background-color: #222430;
  border-radius: 5px;
  z-index: 10;
`;

export const SpectrumGuideImg = styled.div<{ link: string }>`
  width: 90%;
  height: 40%;
  margin: 5px auto;
  border-radius: 5px;
  background-image: url(${(props) => props.link});
`;

export const SpectrumGuidTextWrapper = styled.div`
  width: 90%;
  height: 30%;
  margin: 5px auto;
  display: flex;
  justify-content: space-between;
`;

export const SpectrumGuidText = styled.p`
  color: #fff;
  font-size: 15px;
  font-family: 'PyeongChang-Bold', sans-serif;
  transform: translateY(-17px);
`;

export const DropDownWrapper = styled.div`
  display: block;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 1%;
  right: 10px;
  background-color: white;
  border-radius: 5%;
  box-shadow: 0 0 0 1px #0000008e inset;
  z-index: 1;
  overflow: hidden;
  transition: height 0.2s, width 0.2s;
  transition-delay: 0s, 0.4s;
  &.active {
    & .icon {
      position: absolute;
      top: 0;
      right: 0;
      color: #517aff;
    }
    width: 150px;
    height: 150px;
    display: grid;
    transition: width 0.2s, height 0.2s;
    transition-delay: 0s, 0.4s;
  }

  :hover {
    cursor: pointer;
    :not(.active) {
      box-shadow: 0 0 0 2px #517aff inset;
    }
    & .icon {
      color: #517aff;
    }
  }

  & .icon {
    position: absolute;
    margin: 5px;
    top: 0;
    right: 0;
  }
`;

export const IconWrapper = styled.div`
  height: 20px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const DropDownHeader = styled.p`
  width: 100%;
  height: 100%;
  :hover {
    color: #517aff;
  }
`;

export const OptionDetailWrapper = styled.div`
  height: 120px;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 1fr;
`;

export const OptionDetailRound = styled.div`
  width: 30px;
  height: 30px;
  margin-left: auto;
  margin-right: auto;

  border-radius: 50%;
  background-color: #25252640;
  .detailIcon {
    margin: 5px;
  }
`;

export const OptionDetailText = styled.p`
  font-size: 13px;
  width: 60px;
`;

export const OptionDetaileDiv = styled.div`
  margin: auto;
  width: 70%;
  height: 60%;

  :hover {
    color: #517aff;
  }
  &.active {
    color: #fff;
    & ${OptionDetailRound} {
      background-color: #517aff;
    }
    & ${OptionDetailText} {
      color: #517aff;
    }
  }
`;
