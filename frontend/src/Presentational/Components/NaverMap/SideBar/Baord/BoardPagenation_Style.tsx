import styled from 'styled-components';

const buttonColor = '#A75D5D;';
const textColor = '#F8EAD8';

export const PagenationWrapper = styled.div`
  display: flex;
  margin: auto;
  width: 100%;
  height: 30px;
  justify-content: space-between;
  transform: translateY(15px);

  & .icon {
    cursor: pointer;
    color: ${textColor};
  }
`;

export const WriteButton = styled.div`
  cursor: pointer;
  background-color: ${buttonColor};
  text-align: center;
  color: ${textColor};
  font-weight: bolder;
  font-size: 20px;
  line-height: 30px;
  width: 250px;
  height: 30px;
  border-radius: 5px;
  transform: translateY(-5px);
`;

export const BlankDiv = styled.div`
  width: 16px;
  height: 16px;
`;
