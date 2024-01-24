import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { questionsForClientsInterface } from '~data/constant/servicesBlock/questionsForClients/questionsForClients.interface';
import { servicesDataInterface } from '~data/constant/servicesBlock/servicesListData/servicesListData.interface';
import { statisticalIndicatorsInterface } from '~data/constant/servicesBlock/statisticalIndicators/statisticalIndicators.interface';
import { teamMembersDataInterface } from '~data/temp/employeesList/teamMembersData.interface';

export interface ServicesPageInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  servicesListData: servicesDataInterface[];
  questionsList: questionsForClientsInterface[];
  employeesData: teamMembersDataInterface[];
  statIndicatorsList: statisticalIndicatorsInterface[];
  children?: ReactNode;
}
