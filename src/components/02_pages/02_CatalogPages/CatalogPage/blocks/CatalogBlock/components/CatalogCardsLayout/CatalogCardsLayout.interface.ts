import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { objectItemInterface } from '~data/temp/objectsTemplateList/objectItem.interface';

export interface CatalogCardsLayoutInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  objectsData: objectItemInterface[];
  itemsPerPage: number;
  children?: ReactNode;
}
