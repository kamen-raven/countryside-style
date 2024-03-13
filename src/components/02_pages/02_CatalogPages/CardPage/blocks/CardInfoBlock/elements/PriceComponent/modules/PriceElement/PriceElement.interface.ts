import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { RealEstateObjectInterface } from '~interfaces/objects.interface';
import { UsersInterface } from '~interfaces/users.interface';
import { VillageObjectInterface } from '~interfaces/villages.interface';

export interface PriceElementInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement > {
  objectData: RealEstateObjectInterface | VillageObjectInterface;
  agentData: UsersInterface;
  typePage: 'flats' | 'lands' | 'houses-and-cottages' | 'villages';
}
