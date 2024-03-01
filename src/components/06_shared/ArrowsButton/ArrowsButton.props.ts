import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ApiBlogInterface } from '~interfaces/blog.interface';

export interface ArrowsButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  blogPostsData?: ApiBlogInterface;
}
