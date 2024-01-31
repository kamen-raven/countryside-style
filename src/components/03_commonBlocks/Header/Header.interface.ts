import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface HeaderInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  headerGridArea: string;
}
