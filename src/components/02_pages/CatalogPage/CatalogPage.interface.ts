import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CatalogPageInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement > {
  type: string;
  children?: ReactNode;
}
