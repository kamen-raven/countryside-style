import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { generalContactsDataInterface } from '~data/constant/generalContacts/generalContactData.interface';
import { MenuItemInterface } from '~data/constant/navMenu/menuList.interface';

export interface FooterInterface extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  listItems: MenuItemInterface[];
  generalContactsData: generalContactsDataInterface;
}
