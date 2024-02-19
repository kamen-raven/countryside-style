import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface PopupTemplateComponentInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  type: 'contactForm' | 'reviewForm' | 'successMessage' | 'reviewFull' | null;
  isOpened: boolean;
  //handleClose: () => void;
  children?: ReactNode;
}
