import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface SimpleSearchInputInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  searchBlogKey: string;
  setSearchBlogKey: (key: string) => void;
}
