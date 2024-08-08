import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { BlogInterface } from '~interfaces/blog.interface';

export interface BlogTitleBlockInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  blogPostsData:  BlogInterface[];
}
