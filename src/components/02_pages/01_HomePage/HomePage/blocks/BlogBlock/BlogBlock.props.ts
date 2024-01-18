import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface BlogBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  path: "home" | "blog";
  children?: ReactNode;
}
