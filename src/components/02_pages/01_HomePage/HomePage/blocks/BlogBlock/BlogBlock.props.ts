import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { ApiBlogInterface } from '~interfaces/blog.interface';

export interface BlogBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  path: "home" | "blog";
  blogPostsData: ApiBlogInterface;
  children?: ReactNode;
}
