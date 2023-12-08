import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface TeamBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: ReactNode;
}
