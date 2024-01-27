import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { advantagesItemInterface } from '~data/constant/servicesBlock/advantagesList/advantagesItem.interface';

export interface AdvantagesBlockInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title?: string;
  background?: boolean;
  advantagesList: advantagesItemInterface[];
  children?: ReactNode;
}
