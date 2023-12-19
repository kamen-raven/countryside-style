import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { teamMembersDataInterface } from '~features/TeamMemberCard/TeamMemberCard.props';

export interface TeamBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  teamMembersItems: teamMembersDataInterface[];
  children?: ReactNode;
}

export type { teamMembersDataInterface };
