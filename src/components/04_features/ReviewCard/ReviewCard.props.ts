import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ReviewCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: ReactNode;
}
