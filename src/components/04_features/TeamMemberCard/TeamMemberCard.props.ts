import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { teamMembersDataInterface } from '~utils/temp/teamMembersData/teamMembersData';




export interface TeamMemberCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: teamMembersDataInterface;
  children?: ReactNode;
}
