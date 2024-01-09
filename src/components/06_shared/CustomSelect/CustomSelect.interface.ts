import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CustomSelectInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  options: string[];
  label: string;
  children?: ReactNode;
}

