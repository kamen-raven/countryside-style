import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { titleBlockDataInterface } from '~data/constant/servicesBlock/servicesPagesFor/titleBlockData/titleBlockDataInterface';
import { typePageEnum } from '~data/constant/servicesBlock/servicesPagesFor/typePageEnum';
import { teamMembersDataInterface } from '~data/temp/employeesList/teamMembersData.interface';
import { reviewDataInterface } from '~data/temp/reviewsData/reviewsData.interface';

export interface ForDevelopersPageInterface   extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  typePage: typePageEnum;
  titleBlockData: titleBlockDataInterface;
  employeesData: teamMembersDataInterface[];
  reviewsData: reviewDataInterface[];
}
