import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { teamMembersDataInterface } from '~data/EmployeesList/teamMembersData.interface';

export interface ContactListBlockInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  employeesList: teamMembersDataInterface[];
  children?: ReactNode;
}
