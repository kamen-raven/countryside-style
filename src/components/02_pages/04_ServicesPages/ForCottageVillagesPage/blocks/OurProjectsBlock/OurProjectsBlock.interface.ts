import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface OurProjectsBlockInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement > {
  children?: ReactNode;
}
