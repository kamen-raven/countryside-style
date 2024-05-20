import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { MainPopupState, SupportPopupState } from '~store/popupsStore/useTogglePopupStore';

export interface PopupTemplateComponentInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isOpened: boolean;
  type: 'contactForm' | 'reviewForm' | 'successMessage' | 'errorMessage' | 'reviewFull' | 'reviewImage' | "reviewImage" | "videoPopup" | "successMessage" | "objectImage" | null;
  actions: MainPopupState["actions"] | SupportPopupState["actions"];
  children?: ReactNode;
}
