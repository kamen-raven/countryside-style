import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { UsersInterface } from '~interfaces/users.interface';

export interface ReviewsTitleBlockInterface extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  employeesData: UsersInterface[];//teamMembersDataInterface[];
  children?: ReactNode;
}
