import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CardPageInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement > {
  type: string;
  children?: ReactNode;
}
