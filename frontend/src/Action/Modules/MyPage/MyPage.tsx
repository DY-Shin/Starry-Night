/* eslint-disable no-undef */
import axios, { AxiosError } from 'axios';

export interface postCreateType {
  title: string;
  content: string;
  lat: number;
  lng: number;
  constellations: number[];
}

export interface apiResponseType {
  success: boolean;
  message: string;
}

// 회원 페이지 정보
export interface UserPageInfo {
  id: number;
  name: string;
  profileImageUrl: string;
  completedConstellationCount: number;
  totalConstellationCount: number;
  completedAchievementCount: number;
  totalAchievementCount: number;
  postCount: number;
  permission: number;
}

export interface AchievementDetailInfo {
  id: number;
  name: string;
  createdDate: Date;
  completed: boolean;
  completionPossible: boolean;
  completedConstellationCount: number;
  totalConstellationCount: number;
}

export interface ConstellationListItemInfo {
  id: number;
  name: string;
  completed: boolean;
}

interface UserPostInfo {
  id: number;
  title: string;
  content: string;
  lat: number;
  lng: number;
  writer: {
    id: number;
    name: string;
    profileImagUrl: string;
  };
  images: [
    {
      id: number;
      url: string;
    },
  ];
  constellationTags: [
    {
      id: number;
      name: string;
    },
  ];
  postLikeCount: number;
  permission: true;
  postLikePossible: true;
  postLiked: true;
  createdDate: string;
}

// 회원 작성글
export interface UserPostInfos extends Array<UserPostInfo> {
  content: [];
}

function printError(error: AxiosError) {
  if (error.response) {
    console.log(error.response.data);
  } else if (error.message) {
    console.log('오류 메시지:', error.message);
  } else {
    console.log('알 수 없는 오류가 발생했습니다.');
  }
}

// 회원 페이지 정보 조회
export async function getUserPageInfo(userId: number): Promise<UserPageInfo | null> {
  let data: UserPageInfo | null = null;

  try {
    const res = await axios.get(`${process.env.REACT_APP_API_SERVER_URL}/users/${userId}`, {
      withCredentials: true,
    });

    data = res.data.data as UserPageInfo;
  } catch (error) {
    const axiosError = error as AxiosError;
    printError(axiosError);
  }

  return data;
}

// 유저의 전체 별자리에 대한 현황 조회
export async function getConstellationInfosByUser(userId: number): Promise<ConstellationListItemInfo[] | null> {
  let data: ConstellationListItemInfo[] | null = null;

  try {
    const res = await axios.get(`${process.env.REACT_APP_API_SERVER_URL}/users/${userId}/constellations`, {
      withCredentials: true,
    });

    data = res.data.data as ConstellationListItemInfo[];
  } catch (error) {
    const axiosError = error as AxiosError;
    printError(axiosError);
  }

  return data;
}

// 도전과제 목록 조회
export async function getAchievementList(): Promise<AchievementDetailInfo[] | null> {
  let data: AchievementDetailInfo[] | null = null;

  try {
    const res = await axios.get(`${process.env.REACT_APP_API_SERVER_URL}/achievements`, {
      withCredentials: true,
    });

    data = res.data.data as AchievementDetailInfo[];
  } catch (error) {
    const axiosError = error as AxiosError;
    printError(axiosError);
  }

  return data;
}

// 회원이 작성한 글 목록 조회 (MAX:1000)
export async function getUserPostInfo(userId: number): Promise<UserPostInfos | null> {
  let data: UserPostInfos | null = null;

  try {
    const res = await axios.get(`${process.env.REACT_APP_API_SERVER_URL}/posts?size=1000&userId=${userId}`, {
      withCredentials: true,
    });

    data = res.data.data.content as UserPostInfos;
  } catch (error) {
    const axiosError = error as AxiosError;
    printError(axiosError);
  }

  return data;
}
