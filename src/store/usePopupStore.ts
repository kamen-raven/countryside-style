import { create } from "zustand";

interface PopupState {
  isOpen: boolean;
  type: "contactForm" | "reviewForm" | "successMessage" | "reviewFull" | null;
  controls: {
    openPopup: (popupType: PopupState["type"]) => void;
    closePopup: () => void;
    // handleOverlayClickOrKeyPress: (e: React.MouseEvent<HTMLDivElement, MouseEvent> | React.KeyboardEvent<HTMLDivElement>) => void;
    handleOverlayClick: (
      e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => void;
    handleKeyPress: (event: KeyboardEvent) => void;
  };
}

const usePopupStore = create<PopupState>((set, get) => ({
  isOpen: false,
  type: null, // Начальный тип попапа
  controls: {
    openPopup: (popupType: PopupState["type"]) =>
      set({ isOpen: true, type: popupType }),

    closePopup: () => set({ isOpen: false, type: null }),

    handleOverlayClick: (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
      if (event.target === event.currentTarget) {
        get().controls.closePopup();
      }
    },

    handleKeyPress: (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        get().controls.closePopup();
      }
    },

  },
}));

export default usePopupStore;
