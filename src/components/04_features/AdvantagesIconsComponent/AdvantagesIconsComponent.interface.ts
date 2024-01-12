import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { YourObjectInterface } from '~data/AdvantagesLists/advantagesItem.interface';

export interface AdvantagesIconsComponentInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  advantagesList: YourObjectInterface[];
  children?: ReactNode;
}
