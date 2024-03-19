import { create } from "zustand";

interface VideoPopupState {
  popupVideoLink: string;
  newLink: {
    setVideoLink: (link: string) => void;
    clearVideoLink: () => void;
  };
}

const useVideoPopupStore = create<VideoPopupState>((set) => ({
  popupVideoLink: '',

  newLink: {
    setVideoLink: (link: string) => set({ popupVideoLink: link}),
    clearVideoLink: () => set({ popupVideoLink: ''}),
  },
}));

export default useVideoPopupStore;
