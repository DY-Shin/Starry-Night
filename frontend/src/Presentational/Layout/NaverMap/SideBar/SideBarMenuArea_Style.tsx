import styled from 'styled-components';

export const MenuWrapper = styled.div`
  margin: 10px 0 10px 0px;
  width: 100%;
`;

const focusColor = '#ed83f7;';

export const BtnWrapper = styled.div<{ currentSelectedBoard: string }>`
  display: grid;
  grid-template-columns: 20% 80%;
  grid-template-rows: 1fr;
  margin-left: 20px;
  & .icon {
    color: #b8b8b8;
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
  &:not(:first-child, :last-child) {
    margin: 5px 0 5px 20px;
  }
  & .icon {
    margin: auto 0 auto 0;
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
