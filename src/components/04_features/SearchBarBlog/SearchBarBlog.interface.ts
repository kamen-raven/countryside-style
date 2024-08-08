import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { BlogInterface } from '~interfaces/blog.interface';

export interface SearchBarBlogInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  blogPostsData:  BlogInterface[];
}
