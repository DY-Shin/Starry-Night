import styled from 'styled-components';

export const ModalWrap = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const ModalBackGround = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100vh;
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  gap: 2rem;
  padding: 3.6rem 0;
  border: 1px solid var(--color-white);
  background-color: var(--color-white);
  position: absolute;
  left: 2rem;
  top: 30rem;
  width: 90%;
`;
export const InfoManual = styled.div`
  background-attachment: fixed;
`;
