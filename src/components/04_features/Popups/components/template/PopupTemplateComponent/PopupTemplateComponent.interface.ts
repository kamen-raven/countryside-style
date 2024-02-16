import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface PopupTemplateComponentInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  type: 'contactForm' | 'reviewForm' | 'successMessage' | 'reviewFull';
  children?: ReactNode;
}
