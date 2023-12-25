import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ContactUsBlockInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: ReactNode;
}
