import { create } from "zustand";

export interface MainPopupState {
  isOpen: boolean;
  type: "contactForm" | "reviewForm" | "reviewFull" | "reviewImage" | "videoPopup" | "objectImage";
  actions: {
    openPopup: (popupType: MainPopupState["type"]) => void;
    closePopup: () => void;
    handleOverlayClick: (
      e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => void;
    handleKeyPress: (event: KeyboardEvent) => void;
  };
}

export interface SupportPopupState {
    isOpen: boolean;
    type: "reviewImage" | "successMessage" | "errorMessage" | "reviewSuccessMessage" | null;
    actions: {
      openPopup: (popupType: SupportPopupState["type"]) => void;
      closePopup: () => void;
      handleOverlayClick: (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
      ) => void;
      handleKeyPress: (event: KeyboardEvent) => void;
    };
  }



/* Первый попап */
const useToggleMainPopupStore = create<MainPopupState>((set, get) => ({
  isOpen: false,
  type: "contactForm",
  actions: {
    openPopup: (popupType: MainPopupState["type"]) =>
      set({ isOpen: true, type: popupType }),

    closePopup: () => set({ isOpen: false }),

    handleOverlayClick: (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
      if (event.target === event.currentTarget) {
        get().actions.closePopup();
      }
    },

    handleKeyPress: (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        get().actions.closePopup();
      }
    },
  },
}));


/* Второй попап */
const useToggleSupportPopupStore = create<SupportPopupState>((set, get) => ({
  isOpen: false,
  type: null,
  actions: {
    openPopup: (popupType: SupportPopupState["type"]) => {
      /* yandex.metrica */
      if (popupType === 'successMessage' || popupType === 'reviewSuccessMessage') {
        window.ym(98599118,'reachGoal','successMessage');
      }
      /* /yandex.metrica */
      set({ isOpen: true, type: popupType });
    },

    closePopup: () => set({ isOpen: false, type: null }),

    handleOverlayClick: (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
      if (event.target === event.currentTarget) {
        get().actions.closePopup();
      }
    },

    handleKeyPress: (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        get().actions.closePopup();
      }
    },
  },
}));


export  { useToggleMainPopupStore, useToggleSupportPopupStore };
