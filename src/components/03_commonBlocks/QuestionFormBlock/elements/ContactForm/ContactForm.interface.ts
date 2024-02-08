import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ContactFormInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  contentType?: 'map' | 'image';
  srcContent?: string;
  direction?: 'formFirst' | 'formSecond';
}
