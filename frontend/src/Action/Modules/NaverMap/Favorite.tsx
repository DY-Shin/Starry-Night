/* eslint-disable no-undef */
import axios, { AxiosError } from 'axios';
import FavoriteMarker from '../../../Assets/NaverMap/FavoriteMarker.png';

export interface favoriteResultType {
  content: {
    id: number;
    name: string;
    lat: number;
    lng: number;
  }[];
  totalElements: number;
  totalPages: number;
  numberOfElements: number;
  page: number;
  size: number;
}

export async function AddFavorite(name: string, lat: number, lng: number) {
  try {
    await axios.post(
      `${process.env.REACT_APP_API_SERVER_URL}/favorite-locations`,
      {
        name,
        lat,
        lng,
      },
      {
        withCredentials: true,
      },
    );
  } catch (error) {
    console.error(error);
  }
}

export async function DeleteFavorite(id: number) {
  try {
    await axios.delete(`${process.env.REACT_APP_API_SERVER_URL}/favorite-locations/${id}`, {
      withCredentials: true,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function GetfavoriteData(page: number, size = 12): Promise<favoriteResultType | null> {
  let data: favoriteResultType | null = null;
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_SERVER_URL}/favorite-locations?page=${page}&size=${size}`,
      {
        withCredentials: true,
      },
    );
    data = res.data.data as favoriteResultType;
  } catch (error) {
    console.log(error);
  }
  return data;
}

export async function MakeMarker(
  maps: naver.maps.Map,
  favoriteData: favoriteResultType,
): Promise<naver.maps.Marker[] | null> {
  const markers: naver.maps.Marker[] = [];
  favoriteData.content.forEach((value) => {
    const markerOptions: naver.maps.MarkerOptions = {
      position: new naver.maps.LatLng(value.lat, value.lng),
      map: maps,
      icon: {
        url: FavoriteMarker,
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
