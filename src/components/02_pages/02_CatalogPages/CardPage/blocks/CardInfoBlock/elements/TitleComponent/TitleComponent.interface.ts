import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { RealEstateObjectInterface } from '~interfaces/objects.interface';
import { UsersInterface } from '~interfaces/users.interface';
import { VillageObjectInterface } from '~interfaces/villages.interface';

export interface TitleComponentInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: RealEstateObjectInterface | VillageObjectInterface;
  agentData?: UsersInterface;
}
