import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface LabelSoldInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement > {
  isSold: string;
  isArchived: boolean;
}
