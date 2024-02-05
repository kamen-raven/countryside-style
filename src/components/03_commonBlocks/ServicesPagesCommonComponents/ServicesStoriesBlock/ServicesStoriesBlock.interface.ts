import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ServicesStoriesBlockInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: ReactNode;
}
