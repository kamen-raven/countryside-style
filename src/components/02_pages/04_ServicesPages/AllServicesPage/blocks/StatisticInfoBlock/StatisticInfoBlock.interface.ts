import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { statisticalIndicatorsInterface } from '~data/constant/servicesBlock/allServicesPage/statisticalIndicators/statisticalIndicators.interface';

export interface StatisticInfoBlockInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  statIndicatorsList: statisticalIndicatorsInterface[];
  children?: ReactNode;
}
