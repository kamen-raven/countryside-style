import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { objectItemInterface } from '~data/temp/objectsTemplateList/objectItem.interface';
import { CardInfoBlockInterface } from '../../CardInfoBlock.interface';

export interface PriceComponentInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement > {
  data: objectItemInterface;
  children?: ReactNode;
}
