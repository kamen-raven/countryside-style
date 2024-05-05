import { DetailedHTMLProps, HTMLAttributes } from 'react';
//import { ServiceCardProps } from '../../../../../03_commonBlocks/ServicesList/ServiceCard/ServiceCard.props';
import { servicesDataInterface } from '~data/constant/servicesBlock/allServicesPage/servicesListData/servicesListData.interface';

export interface OurServicesBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  servicesItems:  servicesDataInterface[];
}
