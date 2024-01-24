import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { typePageEnum } from '~data/constant/servicesBlock/servicesPagesFor/typePageEnum';

export interface RequestActionBlockInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  gridArea?: 'first' | 'second';
  nameForm: string;
  typePage: typePageEnum;
}

