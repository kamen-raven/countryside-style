import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { statisticalIndicatorsInterface } from '~data/constant/servicesBlock/allServicesPage/statisticalIndicators/statisticalIndicators.interface';

export interface StatisticInfoItemInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  statIndicatorItem: statisticalIndicatorsInterface;
  children?: ReactNode;
}
