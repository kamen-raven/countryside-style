import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { objectItemInterface } from '~data/temp/objectsTemplateList/objectItem.interface';

export interface MoreObjectsBlockInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement > {
  commonObjectsData: objectItemInterface[];
  children?: ReactNode;
}
