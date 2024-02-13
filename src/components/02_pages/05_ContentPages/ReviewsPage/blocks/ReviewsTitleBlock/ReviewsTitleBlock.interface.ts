import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { teamMembersDataInterface } from '~data/temp/employeesList/teamMembersData.interface';

export interface ReviewsTitleBlockInterface extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  employeesData: teamMembersDataInterface[];
  children?: ReactNode;
}
