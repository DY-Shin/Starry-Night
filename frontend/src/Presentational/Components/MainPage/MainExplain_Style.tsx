import styled from 'styled-components';

// Explain 슬라이드
export const MainExplain = styled.div`
  min-height: 100vh;
  padding-top: 10px;
  padding-left: 8em;
  padding-right: 8em;
  overflow: hidden;
  color: white;
  display: flex;
  backdrop-filter: blur(0.4px);
  @media all and (max-width: 1200px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 30px;
  }
  @media all and (max-width: 768px) {
    justify-content: center;
    align-items: center;
    padding-left: 2em;
    padding-right: 2em;
  }
  @media all and (max-width: 500px) {
    justify-content: center;
    align-items: center;
    padding-left: 1em;
    padding-right: 1em;
  }
`;

export const EPLeftBox = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 4rem;
  cursor: default;
  @media all and (max-width: 1200px) {
    display: none;
  }
  @media all and (max-width: 768px) {
  }
  @media all and (max-width: 500px) {
  }
`;
export const EPLeftBox2 = styled.div`
  flex-basis: 50%;
  display: none;
  flex-direction: column;
  justify-content: center;
  cursor: default;
  @media all and (max-width: 1200px) {
    display: flex;
  }
  @media all and (max-width: 768px) {
    margin-bottom: 3rem;
  }
  @media all and (max-width: 500px) {
  }
`;

export const EPText1 = styled.p`
  font-weight: bold;
  font-size: 38px;
  @media all and (max-width: 1200px) {
    font-size: 38px;
    margin-left: 0;
  }
  @media all and (max-width: 768px) {
  }
  @media all and (max-width: 500px) {
    font-size: 36px;
  }
`;
export const EPText2 = styled.span`
  /* font-weight: bold; */
  font-size: 19px;
  @media all and (max-width: 1200px) {
    font-size: 19px;
    margin-left: 0;
  }
  @media all and (max-width: 768px) {
  }
  @media all and (max-width: 500px) {
    font-size: 18px;
  }
`;

export const EPRightBox = styled.div`
  flex-basis: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media all and (max-width: 1200px) {
  }
  @media all and (max-width: 768px) {
  }
  @media all and (max-width: 500px) {
  }
`;

export const EPImgBox1 = styled.div`
  /* padding: 5px; */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 600px;
  height: 450px;
  /* background-color: rgba(50, 130, 184, 0.3); //#3282B8;
  border: 2px solid #0f4c75; */
  /* border-radius: 10px; */
  /* filter: drop-shadow(0 0 100px rgba(50, 130, 184, 1)); */
  border-style: solid;
  border-radius: 10px;
  border-color: whitesmoke;
  box-shadow: 0 0 7px 0px rgba(52, 152, 219, 0.8) inset, 0 0 70px 2px rgba(52, 152, 219);
  @media all and (max-width: 1200px) {
  }
  @media all and (max-width: 768px) {
    width: 450px;
    height: 400px;
  }
  @media all and (max-width: 500px) {
    width: 250px;
    height: 200px;
  }
`;
