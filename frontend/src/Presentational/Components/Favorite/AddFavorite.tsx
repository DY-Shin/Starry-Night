/* eslint-disable no-undef */
import React, { useRef, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import * as AddStyle from './AddFavorite_Style';
import * as FavoriteApi from '../../../Action/Modules/NaverMap/Favorite';

type propsType = {
  firstCenter: naver.maps.Coord | undefined;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  updateHandler: () => void;
};

function AddFavorite(props: propsType) {
  // 최초 좌표 타입은 naver.maps.Coord
  const { firstCenter, setModalOpen, updateHandler } = props;
  const mapElement = useRef(null);
  const location = firstCenter;

  const [writeMapCenter, setWriteMapCenter] = useState(firstCenter);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const addFavorite = () => {
    if (writeMapCenter) {
      FavoriteApi.AddFavorite(inputValue, writeMapCenter.y, writeMapCenter.x);
      updateHandler();
      setModalOpen(false);
    }
  };

  const init = async () => {
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
      setWriteMapCenter(new naver.maps.LatLng(writeMap.getCenter().y, writeMap.getCenter().x));
    });
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <AddStyle.AddBlackBG>
      <AddStyle.AddWrapper>
        <AddStyle.AddMap ref={mapElement} />
        <AddStyle.AddContentWrapper>
          <AddStyle.AddContentText value={inputValue} onChange={handleInputChange} />
        </AddStyle.AddContentWrapper>
        <AddStyle.AddBotttom>
          <AddStyle.BottomOkButton onClick={() => addFavorite()}>확인</AddStyle.BottomOkButton>
          <AddStyle.BottomCancleButton onClick={() => setModalOpen(false)}>취소</AddStyle.BottomCancleButton>
        </AddStyle.AddBotttom>
      </AddStyle.AddWrapper>
    </AddStyle.AddBlackBG>
  );
}

export default AddFavorite;
