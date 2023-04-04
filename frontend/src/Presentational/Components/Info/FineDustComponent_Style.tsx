import styled from 'styled-components';

const backgroundColor = '#064663';

export const FineDustText = styled.p`
  margin: 0;
  font-size: 30px;
  font-weight: bolder;
  color: white;
  transform: translateY(-20px);
`;
export const FineDustWrapper = styled.div`
  /* position: fixed; */
  /* position: relative; */
  border-radius: 10px;
  width: 100%;
  height: 200px;
  /* z-index: 1000; */
  /* background-color: #007dc5; */
  background-color: ${backgroundColor};
  /* background-color: #ffffff; */
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;

  box-shadow: 0 0 0 4px ${backgroundColor} inset, 0 0 0 8px #fff inset;

  & .icon {
    color: white;
    width: 100px;
    height: 100px;
    position: relative;
    margin: auto;
  }
`;
