import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { RealEstateObjectInterface } from '~interfaces/objects.interface';

export interface CatalogBlockInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  objectsData: RealEstateObjectInterface[];
  typePage: 'flats' | 'lands' | 'houses-and-cottages';
}
