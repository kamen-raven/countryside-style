import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { servicesDataInterface } from '~data/constant/servicesBlock/allServicesPage/servicesListData/servicesListData.interface';
import { titleBlockDataInterface } from '~data/constant/servicesBlock/servicesPagesFor/titleBlockData/titleBlockDataInterface';
import { typePageEnum } from '~data/constant/servicesBlock/servicesPagesFor/typePageEnum';
import { teamMembersDataInterface } from '~data/temp/employeesList/teamMembersData.interface';

import { ReviewInterface } from '~interfaces/review.interface';

export interface ForDevelopersPageInterface   extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  typePage: typePageEnum;
  titleBlockData: titleBlockDataInterface;
  offersListData: servicesDataInterface[];
  employeesData: teamMembersDataInterface[];
  reviewsData: ReviewInterface[];
}
