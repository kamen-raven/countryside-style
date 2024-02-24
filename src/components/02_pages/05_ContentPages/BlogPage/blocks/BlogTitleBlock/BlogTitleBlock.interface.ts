import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface BlogTitleBlockInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  tagsList : string[];
}
