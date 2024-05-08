import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CardInfoComponentInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  containerTemplate: 'picFirst' | 'textFirst';
  title: string;
  children?: ReactNode;
}
