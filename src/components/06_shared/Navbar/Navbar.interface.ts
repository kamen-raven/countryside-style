import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { MenuItemInterface } from '~data/constant/navMenu/menuList.interface';

export interface NavbarInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  listItems: MenuItemInterface[];
  parentComponent: "header" | "footer";
  children?: ReactNode;
}
