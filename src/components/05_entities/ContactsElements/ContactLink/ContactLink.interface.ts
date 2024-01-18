import { ReactNode, DetailedHTMLProps, AnchorHTMLAttributes } from 'react';
import { teamMembersDataInterface } from '~data/temp/employeesList/teamMembersData.interface';

export interface ContactLinkInterface extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  linkInfoData?:  teamMembersDataInterface;
  messenger: 'telegram' | "whatsapp"// | "vkontakte";
  colorSchema: 'colored' | 'white' | 'transparent';
  children?: ReactNode;
}
