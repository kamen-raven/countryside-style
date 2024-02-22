import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { UsersInterface } from '~interfaces/users.interface';

export interface PhoneNumberInterface extends DetailedHTMLProps<HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  employeeItem?: UsersInterface;//teamMembersDataInterface;
  colorText: 'white' | 'green' | 'gray' | 'black';
}
