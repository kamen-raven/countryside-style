import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ButtonInterface extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  type: 'contactForm' | 'reviewForm' | 'successMessage' | 'reviewFull';
  children?: ReactNode;
}
