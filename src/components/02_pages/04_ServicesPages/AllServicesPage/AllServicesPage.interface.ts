import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { questionsForClientsInterface } from '~data/constant/servicesBlock/allServicesPage/questionsForClients/questionsForClients.interface';
import { servicesDataInterface } from '~data/constant/servicesBlock/allServicesPage/servicesListData/servicesListData.interface';
import { statisticalIndicatorsInterface } from '~data/constant/servicesBlock/allServicesPage/statisticalIndicators/statisticalIndicators.interface';
import { UsersInterface } from '~interfaces/users.interface';

export interface AllServicesPageInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  servicesListData: servicesDataInterface[];
  questionsList: questionsForClientsInterface[];
  employeesData: UsersInterface[];//teamMembersDataInterface[];
  statIndicatorsList: statisticalIndicatorsInterface[];
  children?: ReactNode;
}
