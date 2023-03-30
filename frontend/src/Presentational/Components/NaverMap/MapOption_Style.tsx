import styled from 'styled-components';

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
      /* margin-left: 125px; */
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
  /* width: 60%;
  height: calc(120px - (120 * 0.4)); */
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
