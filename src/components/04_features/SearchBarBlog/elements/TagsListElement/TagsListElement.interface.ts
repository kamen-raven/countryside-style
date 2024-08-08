import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { BlogInterface } from '~interfaces/blog.interface';

export interface TagsListElementInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  blogPostsData:  BlogInterface[];
}
