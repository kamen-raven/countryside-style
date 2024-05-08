import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { RealEstateObjectInterface } from '~interfaces/objects.interface';
import { VillageObjectInterface } from '~interfaces/villages.interface';

export interface ObjectForSaleInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>  {
  objectItemsList: RealEstateObjectInterface[] | VillageObjectInterface[];
  linkToCatalog: 'flats' | 'lands' | 'houses-and-cottages' | 'villages';
  containerTemplate: 'picFirst' | 'textFirst';
  children?: ReactNode;
}
