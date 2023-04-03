/* eslint-disable no-undef */
import React, { useRef, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import * as WriteStyle from './WritePost_Style';

type propsType = {
  firstCenter: naver.maps.Coord | undefined;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function WritePost(props: propsType) {
  // 최초 좌표 타입은 naver.maps.Coord
  const { firstCenter, setModalOpen } = props;
  const mapElement = useRef(null);
  const location = firstCenter;

  // 지도의 센터 값이 바뀔때 마다 writeMapCenter값은 변경됨.
  // 나중에 값 뽑아내고 싶다면 writeMapCenter.y (위도, 38.1212 이런식으로 나옴) , writeMapCenter.x (경도, 128.1212 이런식으로 나옴) 이런식으로 뽑으면 숫자 나옴.
  const [writeMapCenter, setWriteMapCenter] = useState(firstCenter);
  // 첨부한 파일들 담겨있는 리스트
  const [fileList, setFileList] = useState<File[]>([]);
  const [forceRender, setForfceRender] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const init = () => {
    if (!mapElement.current) return;
    const writeMap = new naver.maps.Map(mapElement.current, {
      center: location,
      zoom: 17,
      minZoom: 8,
      maxZoom: 17,
      tileSpare: 5,
      logoControl: true,
      logoControlOptions: {
        position: naver.maps.Position.BOTTOM_RIGHT,
      },
      mapDataControl: false,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.RIGHT_CENTER,
        style: naver.maps.ZoomControlStyle.LARGE,
        legendDisabled: true,
      },
      scaleControlOptions: {
        position: naver.maps.Position.BOTTOM_RIGHT,
      },
    });

    if (!location) return;
    const marker = new naver.maps.Marker({
      position: location,
      map: writeMap,
    });

    naver.maps.Event.addListener(writeMap, 'dragend zoomend', () => {
      const newCenter = writeMap.getCenter();
      marker.setPosition(newCenter);
      setWriteMapCenter(new naver.maps.LatLng(writeMap.getCenter().x, writeMap.getCenter().y));
    });
  };

  useEffect(() => {
    init();
  }, []);

  const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newFiles = Array.from(event.target.files);
      const filteredFiles = newFiles.filter((file) => !fileList.some((f) => f.name === file.name));
      if (fileList.length + filteredFiles.length > 3) {
        Swal.fire({
          icon: 'error',
          text: '파일 첨부는 최대 3개까지 가능합니다.',
        });
        return;
      }
      setFileList((prevFileList) => [...prevFileList, ...filteredFiles]);
      setForfceRender((prevForceRender) => prevForceRender + 1);
    }
  };

  const handleFileDelete = (index: number) => {
    setFileList((prevFileList) => prevFileList.filter((file, i) => i !== index));
    setForfceRender(forceRender + 1);
  };

  const handleFileInputLabelClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
      fileInputRef.current.click();
    }
  };

  return (
    <WriteStyle.WriteBlackBG>
      <WriteStyle.WriteWrapper>
        <WriteStyle.WriteMap ref={mapElement} />
        <WriteStyle.WriteBody>
          <WriteStyle.ContentArea>
            <WriteStyle.ContentHead>본문 입력</WriteStyle.ContentHead>
            <WriteStyle.ContentText />
          </WriteStyle.ContentArea>
          <WriteStyle.FileArea>
            <WriteStyle.FileHeader>
              <WriteStyle.ContentHead>사진 첨부</WriteStyle.ContentHead>
              <WriteStyle.FileInputWrapper>
                <WriteStyle.FileInput
                  ref={fileInputRef}
                  type="file"
                  accept="image/*, video/*"
                  multiple
                  onChange={handleFileInputChange}
                />
                <WriteStyle.FileInputLabel onClick={handleFileInputLabelClick}>파일 선택</WriteStyle.FileInputLabel>
              </WriteStyle.FileInputWrapper>
            </WriteStyle.FileHeader>
            {fileList.map((file, index) => (
              <WriteStyle.FilePreviewWrapper key={file.toString() + index.toString()}>
                <WriteStyle.FilePreviewInfo>
                  <WriteStyle.FilePreviewDelete onClick={() => handleFileDelete(index)}>x</WriteStyle.FilePreviewDelete>
                  <WriteStyle.FilePreviewName>{file.name}</WriteStyle.FilePreviewName>
                </WriteStyle.FilePreviewInfo>
              </WriteStyle.FilePreviewWrapper>
            ))}
          </WriteStyle.FileArea>
          <WriteStyle.ConstellationArea>
            <WriteStyle.ConstellationHeader>별자리 선택</WriteStyle.ConstellationHeader>
            <WriteStyle.ConstellationSelect />
          </WriteStyle.ConstellationArea>
        </WriteStyle.WriteBody>
        <WriteStyle.WriteBotttom>
          <WriteStyle.BottomOkButton>확인</WriteStyle.BottomOkButton>
          <WriteStyle.BottomCancleButton onClick={() => setModalOpen(false)}>취소</WriteStyle.BottomCancleButton>
        </WriteStyle.WriteBotttom>
      </WriteStyle.WriteWrapper>
    </WriteStyle.WriteBlackBG>
  );
}

export default WritePost;
