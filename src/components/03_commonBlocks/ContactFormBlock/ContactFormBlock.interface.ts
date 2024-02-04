import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ContactFormBlockInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  contentType?: 'map' | 'image';
  srcContent?: string;
  direction?: 'formFirst' | 'formSecond';
  children?: ReactNode;
}
