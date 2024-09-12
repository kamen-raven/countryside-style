import { create } from "zustand";

export interface objectPhotoState {
  activePhoto: number;
  actions: {
    setActivePhoto: (index: number) => void;
  };
}

const useObjectPhotoStore = create<objectPhotoState>((set) => ({
  activePhoto: 0, // стейт хранения текущего номера фото
  actions: {
    // функция изменения  номера фото
    setActivePhoto: (index: number) => set({ activePhoto: index }),
  },
}));

export default useObjectPhotoStore;
