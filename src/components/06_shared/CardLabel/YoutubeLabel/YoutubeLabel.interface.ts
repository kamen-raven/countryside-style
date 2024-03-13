import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface YoutubeLabelInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  link: string;
  children?: ReactNode;
}
