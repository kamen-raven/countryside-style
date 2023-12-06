import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ServiceCardProps } from '~/components/04_features/ServiceCard/ServiceCard.props';

export interface OurServicesBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  servicesItems: ServiceCardProps[];
}
