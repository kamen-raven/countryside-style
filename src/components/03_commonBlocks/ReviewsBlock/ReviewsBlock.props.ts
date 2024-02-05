import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { reviewDataInterface } from '~data/temp/reviewsData/reviewsData.interface';

export interface ReviewsBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  reviewsDataItem: reviewDataInterface[]
  children?: ReactNode;
}
