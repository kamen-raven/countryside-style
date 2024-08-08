import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { ApiBlogInterface, BlogInterface } from '~interfaces/blog.interface';

export interface CardBlogComponentProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  path: "home" | "blog" | "blogCard";
  blogCardItem: BlogInterface;

  blogPostsData?: ApiBlogInterface;
  nextBtn?: () => void;
  prevBtn?: () => void;
  children?: ReactNode;
}
