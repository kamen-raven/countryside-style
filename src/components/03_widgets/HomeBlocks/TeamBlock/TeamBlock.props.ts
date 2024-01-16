import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { teamMembersDataInterface } from '~data/EmployeesList/teamMembersData.interface';

export interface TeamBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  teamMembersItems: teamMembersDataInterface[];
  role?: 'owner' | 'employee';
  children?: ReactNode;
}
