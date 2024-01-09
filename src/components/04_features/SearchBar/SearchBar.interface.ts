import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface SearchBarInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

  children?: ReactNode;
}
