import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface TagsListElementInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  tagsList: string[];
}
