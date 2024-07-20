import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { BlogInterface } from '~interfaces/blog.interface';

export interface LayoutBlogInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  blogPostsData:  BlogInterface[];
  children?: ReactNode;
}
