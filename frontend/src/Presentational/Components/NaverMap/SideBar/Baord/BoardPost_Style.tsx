import styled from 'styled-components';

export const PostWrapper = styled.div`
  width: 100%;
  & .slick-prev {
    transform: translateX(30px);
    color: black;
    z-index: 10;
    width: 20px;
    height: 20px;
    ::before {
      transform: translateX(30px);
      color: white;
      z-index: 10;
      width: 20px;
      height: 20px;
    }
  }

  & .slick-next {
    transform: translateX(-30px);
    color: black;
    z-index: 10;
    width: 20px;
    height: 20px;
    ::before {
      transform: translateX(-30px);
      color: white;
      z-index: 10;
      width: 20px;
      height: 20px;
    }
  }

  margin-bottom: 50px;
`;

export const PostHead = styled.h3``;

export const PostContent = styled.p`
  margin-top: 30px;
`;

export const StarTagArea = styled.div`
  display: grid;
  /* width: 100%;
  height: 100px; */
  grid-template-columns: repeat(auto-fill, minmax(100px, auto));
`;

export const StarTag = styled.span`
  color: #2529ff;
  cursor: pointer;
  :hover {
    color: #0004f8;
    font-weight: bold;
  }
`;

export const PostBottomArea = styled.div`
  width: 100%;
  height: 25px;
  display: flex;
  justify-content: flex-end;

  .likeIcon {
    cursor: pointer;
  }
`;
export const PostLikeCount = styled.span`
  margin-left: 5px;
  font-size: large;
  font-weight: 500;
`;

export const PostDate = styled.p``;

export const ImageWrapper = styled.div<{ link: string }>`
  width: 100%;
  height: 300px;
  margin: auto;
  background-image: url(${(props) => props.link});
  background-color: black;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 1%;
`;
