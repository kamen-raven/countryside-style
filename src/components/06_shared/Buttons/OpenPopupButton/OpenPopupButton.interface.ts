import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface OpenPopupButtonInterface extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  type: "contactForm" | "reviewForm" | "reviewFull" | "reviewImage";
  children?: ReactNode;
}
