import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { RealEstateObjectInterface } from '~interfaces/objects.interface';
/* import { VillageObjectInterface } from '~interfaces/villages.interface'; */

export interface SearchBarObjectsInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  objectsData?: RealEstateObjectInterface[];
  searchTerm?: string;
  typePage: 'flats' | 'lands' | 'houses-and-cottages' | 'villages' | 'search';
/*   villagesData?: VillageObjectInterface[]; */
}
