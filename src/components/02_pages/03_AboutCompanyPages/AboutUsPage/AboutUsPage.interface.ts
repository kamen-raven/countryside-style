import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { advantagesItemInterface } from '~data/constant/servicesBlock/advantagesList/advantagesItem.interface';
import { UsersInterface } from '~interfaces/users.interface';

export interface AboutUsPageInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  employeesData: UsersInterface[];//teamMembersDataInterface[];
  advantagesListData: advantagesItemInterface[];
  aboutUsPageFacts: advantagesItemInterface[];
  children?: ReactNode;
}
