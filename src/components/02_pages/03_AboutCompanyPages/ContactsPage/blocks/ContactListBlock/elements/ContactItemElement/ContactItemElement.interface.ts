import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { UsersInterface } from '~interfaces/users.interface';

export interface ContactItemElementInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  employeeInfo: UsersInterface;//teamMembersDataInterface;
}
