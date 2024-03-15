import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { RealEstateObjectInterface } from '~interfaces/objects.interface';
import { VillageObjectInterface } from '~interfaces/villages.interface';

export interface MoreObjectsBlockInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement > {
  commonObjects?: RealEstateObjectInterface[];
  villageObjects?:  VillageObjectInterface[];
  typePage: 'flats' | 'lands' | 'houses-and-cottages' | 'villages';
}
