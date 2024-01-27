import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { advantagesItemInterface } from '~data/constant/servicesBlock/advantagesList/advantagesItem.interface';
import { teamMembersDataInterface } from '~data/temp/employeesList/teamMembersData.interface';

export interface AboutUsPageInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  employeesData: teamMembersDataInterface[];
  advantagesListData: advantagesItemInterface[];
  aboutUsPageFacts: advantagesItemInterface[];
  children?: ReactNode;
}
