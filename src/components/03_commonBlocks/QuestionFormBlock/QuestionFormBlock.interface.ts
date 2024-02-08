import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface QuestionFormBlockInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  contentType?: 'map' | 'image';
  srcContent?: string;
  direction?: 'formFirst' | 'formSecond';
}
