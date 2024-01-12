import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { teamMembersDataInterface } from '~utils/temp/teamMembersData/teamMembersData';

export interface TeamBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  teamMembersItems: teamMembersDataInterface[];
  role?: 'owner' | 'employee';
  children?: ReactNode;
}
