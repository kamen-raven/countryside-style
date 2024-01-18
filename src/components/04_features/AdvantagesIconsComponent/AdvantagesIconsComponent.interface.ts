import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { advantagesItemInterface } from '~data/constant/advantagesList/advantagesItem.interface';

export interface AdvantagesIconsComponentInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  advantagesList: advantagesItemInterface[];
  children?: ReactNode;
}
