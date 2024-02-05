import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { objectItemInterface } from '~data/temp/objectsTemplateList/objectItem.interface';

export interface PriceComponentInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement > {
  data: objectItemInterface;
  children?: ReactNode;
}
