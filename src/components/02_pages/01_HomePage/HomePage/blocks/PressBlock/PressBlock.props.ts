import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { pressDataInterface } from '~data/constant/pressBlock/pressArticles.interface';

export interface PressBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  pressItems: pressDataInterface[];
  children?: ReactNode;
}
