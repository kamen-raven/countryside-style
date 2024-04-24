import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { RealEstateObjectInterface } from '~interfaces/objects.interface';
import { VillageObjectInterface } from '~interfaces/villages.interface';

export interface CatalogBlockInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  objectsData?: RealEstateObjectInterface[];
  villagesData?: VillageObjectInterface[];
  typePage: 'flats' | 'lands' | 'houses-and-cottages' | 'villages';
/*   itemsPerPage: number; */
}
