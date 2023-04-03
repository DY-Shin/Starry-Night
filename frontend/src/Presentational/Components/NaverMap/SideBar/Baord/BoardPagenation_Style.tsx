import styled from 'styled-components';

export const PagenationWrapper = styled.div`
  display: flex;
  margin: 0 0 20px 0;
  width: 100%;
  height: 50px;
  justify-content: space-between;

  & .icon {
    cursor: pointer;
  }
`;

export const WriteButton = styled.div`
  cursor: pointer;
  background-color: #416dea;
  text-align: center;
  color: white;
  font-weight: bolder;
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
