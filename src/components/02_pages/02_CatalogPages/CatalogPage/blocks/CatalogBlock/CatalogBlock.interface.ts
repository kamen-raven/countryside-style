import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CatalogBlockInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

  children?: ReactNode;
}
