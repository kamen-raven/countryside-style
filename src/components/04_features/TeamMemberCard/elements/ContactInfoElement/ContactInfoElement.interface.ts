import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { teamMembersDataInterface } from '~data/temp/employeesList/teamMembersData.interface';

export interface ContactInfoElementInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  employeeItem: teamMembersDataInterface;
  containerColor: string;
  children?: ReactNode;
}
