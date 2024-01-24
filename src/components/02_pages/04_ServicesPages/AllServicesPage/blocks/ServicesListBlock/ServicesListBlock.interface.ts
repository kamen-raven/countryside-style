import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { servicesDataInterface } from '~data/constant/servicesBlock/servicesListData/servicesListData.interface';

export interface ServicesListBlockInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  servicesListData: servicesDataInterface[];
  children?: ReactNode;
}
