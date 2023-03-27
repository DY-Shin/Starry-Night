import create from 'zustand';

interface PAGE {
  page: number;
  isFooter: boolean;
  setPage: (page: number) => void;
}

const PageStore = create<PAGE>((set) => ({
  page: 0,
  isFooter: false,
  setPage: (page) => {
    set((state) => ({ isFooter: page === 3, page }));
  },
}));

export default PageStore;
