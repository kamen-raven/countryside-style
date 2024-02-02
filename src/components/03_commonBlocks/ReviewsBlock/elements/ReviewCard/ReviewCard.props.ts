import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { reviewDataInterface } from '~data/temp/reviewsData/reviewsData.interface';

export interface ReviewCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: reviewDataInterface;
  children?: ReactNode;
}

export { reviewDataInterface };
