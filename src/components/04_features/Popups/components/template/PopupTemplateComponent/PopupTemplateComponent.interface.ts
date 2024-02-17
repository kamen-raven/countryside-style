import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface PopupTemplateComponentInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  type: 'contactForm' | 'reviewForm' | 'successMessage' | 'reviewFull';
  isOpened: boolean;
  //handleClose: () => void;
  children?: ReactNode;
}
