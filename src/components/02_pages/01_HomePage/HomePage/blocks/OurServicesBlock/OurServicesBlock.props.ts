import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ServiceCardProps } from '../../../../../03_commonBlocks/ServicesList/ServiceCard/ServiceCard.props';

export interface OurServicesBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  servicesItems: ServiceCardProps[];
}
