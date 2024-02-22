import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { UsersInterface } from '~interfaces/users.interface';

export interface TeamMembersBlockInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  employeesData: UsersInterface[];//teamMembersDataInterface[];
  countUsers: 'owner' | 'employee' | 'all' | 'single';
  children?: ReactNode;
}
