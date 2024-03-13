import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { RealEstateObjectInterface } from '~interfaces/objects.interface';
import { VillageObjectInterface } from '~interfaces/villages.interface';

export interface CardInfoBlockInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  typePage: 'flats' | 'lands' | 'houses-and-cottages' | 'villages';
  objectData: RealEstateObjectInterface | VillageObjectInterface;
}
