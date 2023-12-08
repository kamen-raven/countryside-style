import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CardBlogComponentProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  path: "home" | "blog";
  children?: ReactNode;
}
