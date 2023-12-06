import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { pressDataInterface } from '~/utils/pressArticlesItems';

export interface PressBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  pressItems: pressDataInterface[];
  children?: ReactNode;
}
