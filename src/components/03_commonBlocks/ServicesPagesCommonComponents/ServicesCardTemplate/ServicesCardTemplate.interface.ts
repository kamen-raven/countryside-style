import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { servicesDataInterface } from '~data/constant/servicesBlock/allServicesPage/servicesListData/servicesListData.interface';

export interface ServicesCardTemplateInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  serviceItem: servicesDataInterface;
  buttonText?: string;
  page?: 'home' | 'other';
/*   arrows?: boolean; */
  children?: ReactNode;
}
