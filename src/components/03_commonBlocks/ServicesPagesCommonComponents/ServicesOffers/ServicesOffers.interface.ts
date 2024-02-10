import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { servicesDataInterface } from '~data/constant/servicesBlock/allServicesPage/servicesListData/servicesListData.interface';

export interface ServicesOffersInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  offersListData: servicesDataInterface[];
  children?: ReactNode;
}
