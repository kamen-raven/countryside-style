import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { RealEstateObjectInterface } from '~interfaces/objects.interface';

export interface CatalogCardsLayoutInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  objectsData: RealEstateObjectInterface[];
  typePage: 'flats' | 'lands' | 'houses-and-cottages';
  children?: ReactNode;
/*   itemsPerPage: number; */
}
