import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { advantagesItemInterface } from '~data/AdvantagesLists/advantagesItem.interface';

export interface AdvantagesIconsComponentInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  advantagesList: advantagesItemInterface[];
  children?: ReactNode;
}
