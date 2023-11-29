import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface NavbarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  listItems: MenuItem[];
  children?: ReactNode;
}
interface MenuItem {
  name: string;
  title: string;
  link: string;
}
