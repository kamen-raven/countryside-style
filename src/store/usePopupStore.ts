import { create } from "zustand";

interface PopupState {
  isOpen: boolean;
  type: 'contactForm' | 'reviewForm' | 'successMessage' | 'reviewFull';
  controls: {
    openPopup:  (popupType: PopupState['type']) => void;
    closePopup: () => void;
    handleOverlayClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    handleKeyPress: (event: KeyboardEvent) => void;
  }
}

const usePopupStore = create<PopupState>((set) => ({
  isOpen: false,
  type: 'contactForm', // Начальный тип попапа
  controls: {
    openPopup: (popupType: PopupState['type']) => set({ isOpen: true, type: popupType }),
    closePopup: () => set({ isOpen: false }),
    handleOverlayClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (event.target === event.currentTarget) {
        set({ isOpen: false });
      }
    },
    handleKeyPress: (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        set({ isOpen: false });
      }
    },
  }
}));


export default usePopupStore;
