import styled from 'styled-components';

export const PostLine = styled.hr`
  margin: 0;
  border-top: 1px dashed #0000005e;
`;

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

  .line {
    margin: 30px 0 30px 0;
  }

  :last-child {
    .line {
      display: none;
    }
  }
`;

export const PostTopArea = styled.div`
  width: 100%;
  height: 50px;
  margin: 5px 0 10px 0;
  display: flex;
`;

export const PostWriterImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-image: url(${(props: { link: string }) => props.link});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const PostWriterTextArea = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PostWriterDate = styled.p`
  margin: 0;
  font-size: 14px;
  margin: 5px 0 0 7px;
`;

export const PostWriterName = styled.p`
  margin: 0 0 0 5px;
  font-size: 17px;
  line-height: 20px;
  font-weight: 600;
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
