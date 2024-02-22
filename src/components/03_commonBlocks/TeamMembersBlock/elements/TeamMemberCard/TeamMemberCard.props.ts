import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { UsersInterface } from '~interfaces/users.interface';

export interface TeamMemberCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  employeeItem: UsersInterface;//teamMembersDataInterface;
  countUsers: 'owner' | 'employee' | 'all' | 'single';
  index: number;
}
