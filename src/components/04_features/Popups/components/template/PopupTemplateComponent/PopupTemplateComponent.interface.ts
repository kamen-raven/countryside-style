import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { MainPopupState, SupportPopupState } from '~store/useTogglePopupStore';

export interface PopupTemplateComponentInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isOpened: boolean;
  type: 'contactForm' | 'reviewForm' | 'successMessage' | 'reviewFull' | 'reviewImage' | "reviewImage" | "successMessage" | "privacyPolity" | null;
  actions: MainPopupState["actions"] | SupportPopupState["actions"];
  children?: ReactNode;
}
