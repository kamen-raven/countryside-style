import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { objectItemInterface } from '~data/temp/objectsTemplateList/objectItem.interface';

export interface CardInfoBlockInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: objectItemInterface[];
  children?: ReactNode;
}
