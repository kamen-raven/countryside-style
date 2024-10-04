import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { typePageEnum } from '~data/constant/servicesBlock/servicesPagesFor/typePageEnum';

export interface RequestActionBlockInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  gridArea?: 'first' | 'second' | 'third';
  color?: 'dark' | 'green';
  nameForm: string;
  typePage: typePageEnum;
}

