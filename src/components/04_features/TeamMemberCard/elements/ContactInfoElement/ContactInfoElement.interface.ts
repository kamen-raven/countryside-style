import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { teamMembersDataInterface } from '~utils/temp/teamMembersData/teamMembersData';

export interface ContactInfoElementInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data?: teamMembersDataInterface;
  containerColor: string;
  children?: ReactNode;
}
