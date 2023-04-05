import styled from 'styled-components';

const backgroundColor = '#0e2f3f';
const hoverBackgroundColor = '#2c5164';
const textColor = '#ffffff';
const hoverTextColor = '#fbff00';

export const ConstellationWrapper = styled.div`
  background-color: ${backgroundColor};
  border-radius: 1px;
  /* box-shadow: 0 0 0 2px #fff inset; */
  box-shadow: 0 0 0 4px #fff;

  margin: 20px 0 30px 0;
`;

export const ConstellationItemWrapper = styled.div`
  display: flex;
  width: 100%;
  color: ${textColor};
  align-items: center;
  justify-content: space-between;

  & .icon {
    margin: 5px 20px 5px 0;
  }
  &:hover {
    cursor: pointer;
    background-color: ${hoverBackgroundColor};
    & p,
    .icon {
      color: ${hoverTextColor};
    }
  }
`;

export const ConstellationItemText = styled.p`
  margin: 5px 0 5px 20px;
  color: ${textColor};
  font-size: 20px;
`;
