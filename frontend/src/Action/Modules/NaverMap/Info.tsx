/* eslint-disable no-undef */
import axios, { AxiosError } from 'axios';

export interface infoDataType {
  magnitudeLimit: number;
  sky: string;
  humidity: number;
  temperature: string;
  fineDust: string;
  ultraFineDust: string;
  constellations: { id: number; name: string }[];
}

export async function GetInfoData(lat: number, lng: number): Promise<infoDataType | null> {
  let data: infoDataType | null = null;
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_SERVER_URL}/celestial-weather?lat=${lat}&lng=${lng}`, {
      withCredentials: true,
    });
    data = res.data.data as infoDataType;
  } catch (error) {
    console.log(error);
  }
  return data;
}
