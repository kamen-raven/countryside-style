import { create } from "zustand";

export interface objectPhotoState {
  activePhoto: number;
  actions: {
    setActivePhoto: (index: number) => void;
    nextPhoto: (length: number) => void;
    prevPhoto: (length: number) => void;
    setPlanPhoto: (planPic: number) => void;
  };
}

const useObjectPhotoStore = create<objectPhotoState>((set, get) => ({
  activePhoto: 0, // стейт хранения текущего номера фото
  actions: {
    // функция изменения  номера фото
    setActivePhoto: (index: number) => set({ activePhoto: index }),
    // функция переключения на следующую фотографию
    nextPhoto: (length: number) => {
      const { activePhoto } = get();
      set({ activePhoto: activePhoto === length - 1 ? 0 : activePhoto + 1 });
    },

    // функция переключения на предыдущую фотографию
    prevPhoto: (length: number) => {
      const { activePhoto } = get();
      set({ activePhoto: activePhoto === 0 ? length - 1 : activePhoto - 1 });
    },

    // функция переключения на план объекта
    setPlanPhoto: (planPic: number) => set({ activePhoto: planPic }),
  },
}));

export default useObjectPhotoStore;
