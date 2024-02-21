import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ApiReviewInterface } from '~interfaces/review.interface';

export interface ReviewsCardsLayoutBlockInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  reviewsData: ApiReviewInterface;

  itemsPerPage: number;
}
