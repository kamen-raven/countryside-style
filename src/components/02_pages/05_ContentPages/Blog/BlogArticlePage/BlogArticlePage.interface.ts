import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { BlogInterface } from '~interfaces/blog.interface';

export interface BlogArticlePageInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  blogArticleItem: BlogInterface;
  children?: ReactNode;
}
