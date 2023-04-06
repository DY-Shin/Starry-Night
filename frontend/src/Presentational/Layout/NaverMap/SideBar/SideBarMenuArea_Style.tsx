import styled from 'styled-components';

export const MenuWrapper = styled.div`
  margin: 10px 0 10px 0px;
  width: 100%;
  height: 20%;
  border-bottom: 1px solid #ffffffc8;
`;

const focusColor = '#ed83f7;';

export const BtnWrapper = styled.div<{ currentSelectedBoard: string }>`
  display: grid;
  grid-template-columns: 20% 80%;
  grid-template-rows: 1fr;
  height: calc(100% / 3);
  /* margin-left: 20px; */
  align-items: center;
  & .icon {
    color: #b8b8b8;
    margin: auto;
  }
  :hover {
    cursor: pointer;
    background-color: #d4d3d32f;
    transition: 500ms;
    & p {
      color: ${focusColor};
    }
    & .icon {
      color: ${focusColor};
    }
  }

  &.infoBtn {
    ${(props) =>
      props.currentSelectedBoard === 'info'
        ? `
          & p {
            color: ${focusColor};
          }
          & .icon {
            color: ${focusColor};
          }
        `
        : null}
  }
  &.boardBtn {
    ${(props) =>
      props.currentSelectedBoard === 'board'
        ? `
          & p {
            color: ${focusColor};
          }
          & .icon {
            color: ${focusColor};
          }
        `
        : null}
  }
  &.favoriteBtn {
    ${(props) =>
      props.currentSelectedBoard === 'favorite'
        ? `
          & p {
            color: ${focusColor};
          }
          & .icon {
            color: ${focusColor};
          }
        `
        : null}
  }
`;
