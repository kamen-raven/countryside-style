import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { RealEstateObjectInterface } from '~interfaces/objects.interface';
import { VillageObjectInterface } from '~interfaces/villages.interface';

export interface CardPageInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement > {
  typePage: 'flats' | 'lands' | 'houses-and-cottages' | 'villages';
  objectData: RealEstateObjectInterface | VillageObjectInterface;
  children?: ReactNode;
}
