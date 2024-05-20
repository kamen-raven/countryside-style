import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { RealEstateObjectInterface } from '~interfaces/objects.interface';
import { UsersInterface } from '~interfaces/users.interface';
import { VillageObjectInterface } from '~interfaces/villages.interface';

export interface CardPageInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement > {
  typePage: 'flats' | 'lands' | 'houses-and-cottages' | 'villages';
  objectData: RealEstateObjectInterface | VillageObjectInterface;
  commonObjects?: RealEstateObjectInterface[];
  agentData?: UsersInterface;
  //villageObjects?:  VillageObjectInterface[];
}
