import styled from 'styled-components';

export const MenuWrapper = styled.div`
  margin: 10px 0 10px 0px;
  width: 100%;
`;

export const BtnWrapper = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  grid-template-rows: 1fr;
  padding-left: 20px;
  & .icon {
    color: #5a5959;
  }
  :hover {
    cursor: pointer;
    background-color: #403f3f30;
    transition: 500ms;
    & p {
      color: #fc9e39;
    }
    & .icon {
      color: #fc9e39;
    }
  }
  &:not(:first-child, :last-child) {
    margin: 5px 0 5px 0;
  }
  & .icon {
    margin: auto 0 auto 0;
  }
`;
