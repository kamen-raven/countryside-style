import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ServiceCardProps } from '~features/ServiceCard/ServiceCard.props';

export interface OurServicesBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  servicesItems: ServiceCardProps[];
}
