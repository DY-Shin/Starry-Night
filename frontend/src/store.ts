import create from 'zustand';
import { persist } from 'zustand/middleware';

interface PAGE {
  page: number;
  isFooter: boolean;
  setPage: (page: number) => void;
}

export const PageStore = create<PAGE>((set) => ({
  page: 0,
  isFooter: false,
  setPage: (page) => {
    set(() => ({ isFooter: page === 3, page }));
  },
}));

// persist로 새로고침해도 데이터를 유지해주는데,
// type지정이 안되므로 any로 해결.
export const UserStore = create<any>(
  persist(
    (set) => ({
      name: 'null',
      profileImageUrl: 'null',
      setUser: (name: string, profileImageUrl: string) => {
        set(() => ({ name, profileImageUrl }));
      },
    }),
    { name: 'user-info' },
  ),
);
