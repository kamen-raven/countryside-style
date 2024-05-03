import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface MapActiveContainerInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: ReactNode;
}
