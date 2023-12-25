import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface SearchBarBlockInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

  children?: ReactNode;
}
