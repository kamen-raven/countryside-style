import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { MenuItemInterface } from '~data/constant/navMenu/menuList.interface';

export interface NavbarInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  listItems: MenuItemInterface[];
}
