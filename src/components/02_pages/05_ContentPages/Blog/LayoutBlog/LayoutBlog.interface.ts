import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { ApiBlogInterface } from '~interfaces/blog.interface';

export interface LayoutBlogInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  blogPostsData: ApiBlogInterface;
  children?: ReactNode;
}
