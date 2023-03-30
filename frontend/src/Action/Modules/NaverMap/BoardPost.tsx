/* eslint-disable no-undef */
import axios from 'axios';
import PostPinMarker from '../../../Assets/NaverMap/PostPinMarker.png';
// const { naver } = window;

export interface imagesType {
  id: number;
  url: string;
}

export interface writerType {
  id: number;
  name: string;
  profileImageUrl: string;
}

export interface dataType {
  id: number;
  title: string;
  content: string;
  lat: number;
  lng: number;
  writer: writerType;
  images: imagesType[];
  constellationTags: { id: number; name: string }[];
  postLikeCount: number;
  permission: boolean;
  postLikePossible: boolean;
  postLiked: boolean;
  createdDate: Date | string;
}

export interface resultType {
  content: dataType[];
  totalElements: number;
  totalPages: number;
  numberOfElements: number;
  page: number;
  size: number;
}

// export async function MakeMarker(maps: naver.maps.Map): Promise<naver.maps.Marker[] | null> {
export async function GetPostData(maps: naver.maps.Map, page: number, size = 5): Promise<resultType | null> {
  const map = maps;
  const mapBound: naver.maps.Bounds = map.getBounds();

  let data: resultType | null = null;
  try {
    const res = await axios.get(
      `http://localhost:8090/api/posts?pointA=${mapBound.getMax().y}&pointA=${mapBound.getMax().x}&pointB=${
        mapBound.getMin().y
      }&pointB=${mapBound.getMin().x}&page=${page - 1}&size=${size}`,
    );
    data = res.data.data as resultType;
  } catch (error) {
    console.log(error);
  }
  return data;
}

export async function MakeMarker(maps: naver.maps.Map, postData: resultType): Promise<naver.maps.Marker[] | null> {
  const markers: naver.maps.Marker[] = [];
  postData.content.forEach((value) => {
    const markerOptions: naver.maps.MarkerOptions = {
      position: new naver.maps.LatLng(value.lat, value.lng),
      map: maps,
      icon: {
        url: PostPinMarker,
        size: new naver.maps.Size(30, 30),
        scaledSize: new naver.maps.Size(30, 30),
      },
      animation: naver.maps.Animation.DROP,
    };
    markers.push(new naver.maps.Marker(markerOptions));
  });

  return markers;
}

export function clearMarker(markers: naver.maps.Marker[]) {
  if (!markers) return;
  markers.forEach((item) => {
    item.setMap(null);
  });
}
