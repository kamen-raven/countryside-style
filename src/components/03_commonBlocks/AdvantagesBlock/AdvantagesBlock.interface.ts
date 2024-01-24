import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { advantagesItemInterface } from '~data/constant/advantagesList/advantagesItem.interface';

export interface AdvantagesBlockInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title?: string;
  background?: boolean;
  advantagesList: advantagesItemInterface[];
}
