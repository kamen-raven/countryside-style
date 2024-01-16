import { ReactNode, DetailedHTMLProps, AnchorHTMLAttributes } from 'react';
import { teamMembersDataInterface } from '~data/EmployeesList/teamMembersData.interface';

export interface ContactLinkInterface extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  linkInfoData:  teamMembersDataInterface[];
  messenger: 'telegram' | "whatsapp";
  colorSchema: 'color' | 'white' | 'transparent';
  children?: ReactNode;
}
