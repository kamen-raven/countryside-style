import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { teamMembersDataInterface } from '~data/temp/employeesList/teamMembersData.interface';

export interface TeamMemberCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  employeeItem: teamMembersDataInterface;
  children?: ReactNode;
}
