import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { RealEstateObjectInterface } from '~interfaces/objects.interface';
import { VillageObjectInterface } from '~interfaces/villages.interface';

export interface InfoContainerInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement > {
  data: RealEstateObjectInterface | VillageObjectInterface;
  typePage: 'flats' | 'lands' | 'houses-and-cottages' | 'villages';
}
