import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { RealEstateObjectInterface } from '~interfaces/objects.interface';
import { UsersInterface } from '~interfaces/users.interface';
/* import { VillageObjectInterface } from '~interfaces/villages.interface'; */

export interface PrintPageInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement > {
  objectData: RealEstateObjectInterface;
  agentData: UsersInterface;
}
