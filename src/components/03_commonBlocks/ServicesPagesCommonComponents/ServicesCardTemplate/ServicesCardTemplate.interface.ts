import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { servicesDataInterface } from '~data/constant/servicesBlock/allServicesPage/servicesListData/servicesListData.interface';

export interface ServicesCardTemplateInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  serviceItem: servicesDataInterface;
  index: number;
  buttonText?: string;
  page?: 'home' | 'services' | 'other';
/*   arrows?: boolean; */
  children?: ReactNode;
}
