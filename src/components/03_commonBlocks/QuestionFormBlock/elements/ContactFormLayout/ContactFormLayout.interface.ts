import { StaticImageData } from 'next/image';
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ContactFormLayoutInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  contentType?: 'map' | 'image';
  mapContent?: string;
  imgContent?: StaticImageData;
  direction?: 'formFirst' | 'formSecond';
  children?: ReactNode;
}
