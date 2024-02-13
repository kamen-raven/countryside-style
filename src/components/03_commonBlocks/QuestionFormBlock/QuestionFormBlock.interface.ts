import { StaticImageData } from 'next/image';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface QuestionFormBlockInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  contentType?: 'map' | 'image';
  mapContent?: string;
  imgContent?: StaticImageData;
  direction?: 'formFirst' | 'formSecond';
}
