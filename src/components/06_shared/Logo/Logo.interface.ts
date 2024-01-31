import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface LogoInterface extends DetailedHTMLProps<HTMLAttributes<HTMLLinkElement>, HTMLLinkElement> {
  color?: 'gray' | '';
}
