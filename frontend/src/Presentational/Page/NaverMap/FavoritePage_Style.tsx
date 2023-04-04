import styled from 'styled-components';

const textColor = '#ffffffe1';

export const FavoriteWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const FavoriteItemText = styled.p`
  color: ${textColor};
  font-size: 20px;
  margin: 0 0 0 30px;
`;

export const FavoriteItemFrontWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  :hover {
    background-color: #96949428;
  }
`;

export const FavoriteItemWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 10px 0 10px 0;
  cursor: pointer;
  & .icon {
    color: ${textColor};
  }
  & .iconBack {
    :hover {
      color: #ff5a5a;
    }
  }
`;

export const FavoriteHeader = styled.p`
  color: ${textColor};
  margin: 0;
  font-size: 25px;
`;
