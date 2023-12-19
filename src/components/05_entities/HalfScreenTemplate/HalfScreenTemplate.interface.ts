import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';


export interface HalfScreenTemplateInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  conditionColor: 'green' | 'gray' | 'dark';
  conditionTemplate: 'picFirst' | 'textFirst';
  children?: ReactNode;
}
