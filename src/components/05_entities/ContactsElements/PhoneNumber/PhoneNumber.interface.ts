import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { teamMembersDataInterface } from '~data/temp/employeesList/teamMembersData.interface';

export interface PhoneNumberInterface extends DetailedHTMLProps<HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  employeeItem?: teamMembersDataInterface;
  colorText: 'white' | 'green' | 'gray' | 'black';
  children?: ReactNode;
}
