import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { questionsForClientsInterface } from '~data/constant/servicesBlock/questionsForClients/questionsForClients.interface';
import { statisticalIndicatorsInterface } from '~data/constant/servicesBlock/statisticalIndicators/statisticalIndicators.interface';
import { teamMembersDataInterface } from '~data/temp/employeesList/teamMembersData.interface';

export interface ServicesPageInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  questionsList: questionsForClientsInterface[];
  employeesData: teamMembersDataInterface[];
  statIndicatorsList: statisticalIndicatorsInterface[];
  children?: ReactNode;
}
