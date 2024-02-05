import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { teamMembersDataInterface } from '~data/temp/employeesList/teamMembersData.interface';

export interface TeamMemberCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  employeeItem: teamMembersDataInterface;
  teamRole: 'owner' | 'employee' | 'all';
  index: number;
}
