import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { reviewDataInterface } from '~data/temp/reviewsData/reviewsData.interface';

export interface ReviewCardInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: reviewDataInterface;
  children?: ReactNode;
}
