import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { teamMembersDataInterface } from '~data/EmployeesList/teamMembersData.interface';

export interface PhoneNumberInterface extends DetailedHTMLProps<HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  employeeItem?: teamMembersDataInterface;
  colorText: 'white' | 'green' | 'gray' | 'black';
  children?: ReactNode;
}
