import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { RealEstateObjectInterface } from '~interfaces/objects.interface';
import { UsersInterface } from '~interfaces/users.interface';

export interface PriceElementInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement > {
  objectData: RealEstateObjectInterface;
  agentData: UsersInterface;
}
