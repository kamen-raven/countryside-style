import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

import { ApiReviewInterface } from '~interfaces/review.interface';

export interface ReviewsBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  reviewsDataItem: ApiReviewInterface; //reviewDataInterface[]
  children?: ReactNode;
}
