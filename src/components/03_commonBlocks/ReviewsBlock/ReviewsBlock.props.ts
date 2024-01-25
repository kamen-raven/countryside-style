import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { reviewDataInterface } from '~common/ReviewsBlock/elements/ReviewCard/ReviewCard.props';

export interface ReviewsBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  reviewsDataItem: reviewDataInterface[]
  children?: ReactNode;
}
