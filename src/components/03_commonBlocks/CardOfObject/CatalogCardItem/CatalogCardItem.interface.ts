import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { objectItemInterface } from '~data/temp/objectsTemplateList/objectItem.interface';

export interface CatalogCardItemInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  item: objectItemInterface;
  children?: ReactNode;
}
