import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface OdometerCounterInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  //target: number;
  //duration?: number;
  //step?: number;
  //tag: 'span' | 'p' | 'div';
  number: number;
}
