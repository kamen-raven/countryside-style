import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { teamMembersDataInterface } from '~data/EmployeesList/teamMembersData.interface';

export interface ContactInfoElementInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  employeeItem: teamMembersDataInterface;
  containerColor: string;
  children?: ReactNode;
}
