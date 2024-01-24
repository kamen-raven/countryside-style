import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { servicesDataInterface } from '~data/constant/servicesBlock/servicesListData/servicesListData.interface';

export interface ServicesCardTemplateInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  serviceItem: servicesDataInterface;
  buttonText?: string;
  arrows?: boolean;
  children?: ReactNode;
}
