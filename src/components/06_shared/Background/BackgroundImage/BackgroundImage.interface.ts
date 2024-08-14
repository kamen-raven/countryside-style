import { StaticImageData } from 'next/image';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface BackgroundImageInterface extends DetailedHTMLProps<HTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  image: StaticImageData;
  alt: string;
  sizes?: string;
}
