import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { teamMembersDataInterface } from '~utils/temp/teamMembersData/teamMembersData';

export interface AboutUsPageInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: teamMembersDataInterface[];
  children?: ReactNode;
}
