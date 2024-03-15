import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { RealEstateObjectInterface } from '~interfaces/objects.interface';

export interface CatalogCardComponentInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  item: RealEstateObjectInterface;
  //typePage: 'flats' | 'lands' | 'houses-and-cottages';
}
