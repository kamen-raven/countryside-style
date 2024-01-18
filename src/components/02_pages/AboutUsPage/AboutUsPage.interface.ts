import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { teamMembersDataInterface } from '~data/temp/employeesList/teamMembersData.interface';

export interface AboutUsPageInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  employeesData: teamMembersDataInterface[];
  children?: ReactNode;
}
