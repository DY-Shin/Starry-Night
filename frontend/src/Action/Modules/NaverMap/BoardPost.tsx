/* eslint-disable no-undef */
// import axios from 'axios';

// const { naver } = window;

// export async function MakeMarker(maps: naver.maps.Map): Promise<naver.maps.Marker[] | null> {
export async function MakeMarker(maps: naver.maps.Map) {
  if (!maps) {
    return null;
  }

  const map = maps;
  const mapBound: naver.maps.Bounds = map.getBounds();
  console.log('getMax : ', mapBound.getMax());
  console.log('getMim : ', mapBound.getMin());
  map.setCenter(new naver.maps.LatLng(mapBound.getMin().y, mapBound.getMin().x));

  //   const markers: naver.maps.Marker[] = [];
  //   try {
  //     const res = await axios.get(`localhost:8090/api/posts?pointA=${mapBound.get}&pointA=123&pointB=40&pointB=125`);
  //   } catch (error) {}
}

// export function temp() {
//   return 'test';
// }
