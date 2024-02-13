import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { ReviewInterface } from '~interfaces/review.interface';

export interface HomePageInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  reviewsData: ReviewInterface[];
  children?: ReactNode;
}
