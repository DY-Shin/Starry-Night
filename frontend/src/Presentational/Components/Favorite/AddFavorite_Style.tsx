import styled from 'styled-components';

const backgroundColor = '#13232f';
const textColor = '#ffffffe2';

export const AddContentText = styled.input.attrs({
  type: 'text',
  maxLength: 15,
  placeholder: '즐겨찾기 이름 입력...',
})`
  background-color: ${backgroundColor};
  border: 1px solid ${textColor};
  border-radius: 5px;
  height: 40px;
  width: 95%;
  color: ${textColor};
  font-size: 20px;
  font-family: 'PyeongChang-Bold', sans-serif;
  text-align: center;

  ::placeholder {
    font-size: 20px;
    font-family: 'PyeongChang-Bold', sans-serif;
    text-align: center;
  }
`;

export const AddContentHeader = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-left: 20px;
  color: ${textColor};
`;

export const AddContentWrapper = styled.div`
  width: 100%;
  margin: 50px 0 50px 0;
  display: flex;
  justify-content: center;
`;

export const AddBlackBG = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 100;
`;
export const AddWrapper = styled.div`
  background-color: ${backgroundColor};
  margin: auto;
  margin-top: 3%;
  width: 500px;
  height: 500px;
  border-radius: 10px;
`;

export const AddBody = styled.div`
  width: 500px;
  height: 330px;
  margin: 5px;
`;

export const AddBotttom = styled.div`
  width: 500px;
  height: 50px;
`;

export const BottomOkButton = styled.div`
  background-color: #5465fd;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-size: 20px;
  margin-right: 5px;
  padding: 6px 12px;
  margin-left: 25%;
`;

export const BottomCancleButton = styled.div`
  background-color: #fd5454;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-size: 20px;
  margin-right: 5px;
  padding: 6px 12px;
  margin-left: 20%;
`;

export const AddMap = styled.div`
  width: 95%;
  height: 300px;
  z-index: 100;
  outline: none;
  border-radius: 10px;
  margin: auto;
  transform: translateY(10px);
`;
