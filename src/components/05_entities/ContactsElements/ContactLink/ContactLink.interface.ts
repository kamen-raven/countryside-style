import { ReactNode, DetailedHTMLProps, AnchorHTMLAttributes } from 'react';
import { UsersInterface } from '~interfaces/users.interface';

export interface ContactLinkInterface extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  linkInfoData?: UsersInterface;// teamMembersDataInterface;
  messenger: 'telegram' | "whatsapp"// | "vkontakte";
  colorSchema: 'colored' | 'white' | 'transparent';
  children?: ReactNode;
}
