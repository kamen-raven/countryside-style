import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface PhoneNumberInterface extends DetailedHTMLProps<HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  colorText: 'white' | 'green' | 'gray' | 'black';
  children?: ReactNode;
}
