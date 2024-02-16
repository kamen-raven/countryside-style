import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { MenuItemInterface } from '~data/constant/navMenu/menuList.interface';

export interface NavListFooterInterface extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  listItems: MenuItemInterface[];
}
