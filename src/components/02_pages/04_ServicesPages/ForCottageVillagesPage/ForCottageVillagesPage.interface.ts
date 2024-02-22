import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { servicesDataInterface } from '~data/constant/servicesBlock/allServicesPage/servicesListData/servicesListData.interface';
import { titleBlockDataInterface } from '~data/constant/servicesBlock/servicesPagesFor/titleBlockData/titleBlockDataInterface';
import { typePageEnum } from '~data/constant/servicesBlock/servicesPagesFor/typePageEnum';
import { villagesProjectsDataInterface } from '~data/constant/servicesBlock/villagesProjectsData/villagesProjectsData.interface';
import { UsersInterface } from '~interfaces/users.interface';

export interface ForCottageVillagesPageInterface   extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  typePage: typePageEnum;
  titleBlockData: titleBlockDataInterface;
  offersListData: servicesDataInterface[];
  projectsData: villagesProjectsDataInterface[];
  employeesData: UsersInterface[];//teamMembersDataInterface[];
}
