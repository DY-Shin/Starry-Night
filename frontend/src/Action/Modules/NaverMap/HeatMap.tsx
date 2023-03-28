/* eslint-disable no-undef */

const { naver } = window;

export function TurnOnHeatMap(maps: naver.maps.Map | null): naver.maps.visualization.HeatMap | null {
  // const heatData = {"weight": 2, "location": [36.0207091, 127.9204629]};
  if (!maps) {
    return null;
  }

  const map = maps;
  console.log(map.getCenter().y, map.getCenter().x);

  const heatData: naver.maps.visualization.WeightedLocation[] = [
    new naver.maps.visualization.WeightedLocation(map.getCenter().y, map.getCenter().x, 3),
  ];

  const heatmap = new naver.maps.visualization.HeatMap({
    map: maps,
    data: heatData,
  });

  return heatmap;
}

export function TurnOffHeatMap(heatmaps: naver.maps.visualization.HeatMap | null) {
  if (!heatmaps) return null;

  const heatmap = heatmaps;
  heatmap.setMap(null);
}
