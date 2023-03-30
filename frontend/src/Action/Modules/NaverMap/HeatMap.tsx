/* eslint-disable no-undef */

import axios from 'axios';

const { naver } = window;

interface DataType {
  lat: number;
  lng: number;
  weight: number;
}

export async function TurnOnHeatMap(maps: naver.maps.Map | null): Promise<naver.maps.visualization.HeatMap | null> {
  // const heatData = {"weight": 2, "location": [36.0207091, 127.9204629]};

  if (!maps) {
    return null;
  }

  const map = maps;

  let dataArray: DataType[] = [{ lat: 0, lng: 0, weight: 0 }];
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_SERVER_URL}/heatmaps?baseLat=${map.getCenter().y}&baseLng=${
        map.getCenter().x
      }&NELat=${map.getBounds().getMax().y}&NELng=${map.getBounds().getMax().x}&zoom=${map.getZoom()}`,
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
    convertData.push(new naver.maps.visualization.WeightedLocation(value.lat, value.lng, value.weight));
  });

  const heatmap = new naver.maps.visualization.HeatMap({
    map: maps,
    data: convertData,
    radius: 32,
    opacity: 0.3,
  });

  return heatmap;
}

export async function TurnOffHeatMap(heatmaps: naver.maps.visualization.HeatMap | null) {
  if (!heatmaps) return true;

  const heatmap = heatmaps;
  heatmap.setMap(null);

  return true;
}
