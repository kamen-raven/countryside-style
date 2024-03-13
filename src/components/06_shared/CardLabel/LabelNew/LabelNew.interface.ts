import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface LabelNewInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement > {
  createdAt: string;
}
