import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface VideoPopupButtonInterface extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  link: string;
  children?: ReactNode;
}
