import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { UsersInterface } from '~interfaces/users.interface';

export interface SellerElementInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement > {
  agentData: UsersInterface;
}
