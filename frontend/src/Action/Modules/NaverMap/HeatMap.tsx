/* eslint-disable no-undef */

const { naver } = window;

export const TurnOnHeatMap = (maps: naver.maps.Map | null) => {
  // const heatData = {"weight": 2, "location": [36.0207091, 127.9204629]};
  console.log('api 들어옴 ', maps);
  if (!maps) return;
  console.log('api 조건 통과됨');

  const heatData = [
    new naver.maps.visualization.WeightedLocation(36.0207091, 127.9204629, 0.5),
    new naver.maps.visualization.WeightedLocation(37.0207091, 128.9204629, 0.5),
    new naver.maps.visualization.WeightedLocation(38.0207091, 129.9204629, 0.5),
    new naver.maps.visualization.WeightedLocation(39.0207091, 130.9204629, 0.5),
  ];

  const heatmap = new naver.maps.visualization.HeatMap({
    map: maps,
    data: heatData,
  });

  console.log(heatmap);
};

export const TurnOffHeatMap = (maps: naver.maps.Map | null) => {
  if (!maps) return;

  const layer = maps.getOptions('HeatMapLayer');

  console.log('레이어 ', layer);
};
