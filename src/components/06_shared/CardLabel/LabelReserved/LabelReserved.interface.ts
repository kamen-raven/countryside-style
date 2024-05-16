import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface LabelReservedInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement > {
  isBook: boolean;
}
