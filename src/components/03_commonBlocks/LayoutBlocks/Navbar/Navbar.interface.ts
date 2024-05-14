import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { generalContactsDataInterface } from '~data/constant/generalContacts/generalContactData.interface';
import { MenuItemInterface } from '~data/constant/navMenu/menuList.interface';

export interface NavbarInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  listItems: MenuItemInterface[];
  generalContactsData: generalContactsDataInterface;
}
