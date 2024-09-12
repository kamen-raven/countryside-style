import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CounterElementInterface extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  activeIndex: number;
  totalLength: number;
}
