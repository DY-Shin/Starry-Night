/* eslint-disable no-undef */

import axios from 'axios';

interface DataType {
  lat: number;
  lng: number;
}

export async function TurnOffPhotoSpot(photoSpotObjects: naver.maps.visualization.DotMap | null) {
  if (!photoSpotObjects) return true;

  const photoSpotObject = photoSpotObjects;
  photoSpotObject.setMap(null);

  return true;
}

export async function TurnOnPhotoSpot(
  maps: naver.maps.Map | null,
  pointA: naver.maps.Coord,
  pointB: naver.maps.Coord,
): Promise<naver.maps.visualization.DotMap | null> {
  if (!maps) {
    return null;
  }

  const map = maps;
  let dataArray: DataType[] = [{ lat: 0, lng: 0 }];
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_SERVER_URL}/observation-spots?pointA=${pointA.y}&pointA=${pointA.x}&pointB=${pointB.y}&pointB=${pointB.x}`,
      { withCredentials: true },
    );
    if (Array.isArray(res.data.data)) {
      const data = res.data.data as DataType[];
      dataArray = data;
    } else {
      console.error('res.data is not an array.');
    }
  } catch (error) {
    console.error(error);
  }

  const convertData: naver.maps.visualization.WeightedLocation[] = [];

  dataArray.forEach((value) => {
    convertData.push(new naver.maps.visualization.WeightedLocation(value.lat, value.lng));
  });

  const photoSpotMap = new naver.maps.visualization.DotMap({
    map: maps,
    data: convertData,
  });

  return photoSpotMap;
}
