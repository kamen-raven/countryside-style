import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { ApiReviewInterface } from '~interfaces/review.interface';

export interface HomePageInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  reviewsData: ApiReviewInterface;
  children?: ReactNode;
}
