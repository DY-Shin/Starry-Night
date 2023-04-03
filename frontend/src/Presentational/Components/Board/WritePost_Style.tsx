import styled from 'styled-components';

export const WriteBlackBG = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 100;
`;
export const WriteWrapper = styled.div`
  background-color: white;
  margin: auto;
  margin-top: 2%;
  width: 500px;
  height: 700px;
  border-radius: 10px;
`;

export const ConstellationArea = styled.div``;
export const ConstellationHeader = styled.p`
  font-weight: 600;
  font-size: 17px;
`;

export const ConstellationSelect = styled.select`
  width: 490px;
  height: 30px;
  margin-left: auto;
  direction: ltr;
`;

export const ContentText = styled.textarea.attrs({ cols: 66, rows: 5, placeholder: '내용 입력..', maxLength: 50 })`
  resize: none;
  border-radius: 10px;
`;

export const ContentHead = styled.p`
  font-weight: 600;
  font-size: 17px;
`;

export const ContentArea = styled.div``;

export const WriteBody = styled.div`
  width: 500px;
  height: 330px;
  margin: 5px;
`;

export const WriteBotttom = styled.div`
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

export const TempHead = styled.h1``;

export const WriteMap = styled.div`
  width: 500px;
  height: 300px;
  z-index: 100;
  outline: none;
  border-radius: 10px;
`;

export const FileArea = styled.div`
  height: 100px;
`;

export const FileHeader = styled.div`
  display: flex;
`;

export const FileInputWrapper = styled.div`
  margin: 10px 10px 0 auto;
`;

export const FileInput = styled.input`
  display: none;
`;

export const FileInputLabel = styled.label`
  background-color: #4caf50;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  margin-right: 5px;
  padding: 6px 12px;
`;

export const FilePreviewWrapper = styled.div`
  display: flex;
  align-items: center;
  /* margin: 5px 0; */
`;

export const FilePreviewInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const FilePreviewName = styled.p`
  font-size: 14px;
  margin-left: 10px;
  margin-top: 0;
  margin-bottom: 0;
`;

export const FilePreviewDelete = styled.button`
  background-color: #f44336;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 14px;
  /* padding: 6px 12px; */
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #d32f2f;
  }
`;
