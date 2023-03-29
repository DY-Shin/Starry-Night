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
    set((state) => ({ isFooter: page === 3, page }));
  },
}));

interface User {
  name: string;
  profileImageUrl: string;
  setUser: (name: string, profileImageUrl: string) => void;
}

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

interface OpenDropMenuu {
  isOpen2: boolean;
  setIsOpen2: (isOpen: boolean) => void;
}

export const OpenDropStore = create<OpenDropMenuu>((set) => ({
  isOpen2: false,
  setIsOpen2: (isOpen2) => {
    set(() => ({ isOpen2 }));
  },
}));
