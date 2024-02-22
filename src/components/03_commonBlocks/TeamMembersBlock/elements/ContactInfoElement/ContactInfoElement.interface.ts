import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { UsersInterface } from '~interfaces/users.interface';

export interface ContactInfoElementInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  employeeItem: UsersInterface;//teamMembersDataInterface;
  children?: ReactNode;
}
