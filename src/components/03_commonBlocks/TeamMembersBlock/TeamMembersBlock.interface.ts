import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { teamMembersDataInterface } from '~data/temp/employeesList/teamMembersData.interface';

export interface TeamMembersBlockInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  employeesData: teamMembersDataInterface[];
  teamRole: 'owner' | 'employee' | 'all';
  children?: ReactNode;
}
