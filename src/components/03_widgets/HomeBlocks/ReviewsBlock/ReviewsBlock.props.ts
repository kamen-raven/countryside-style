import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { reviewDataInterface } from '~/components/04_features/ReviewCard/ReviewCard.props';

export interface ReviewsBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  reviewsDataItem: reviewDataInterface[]
  children?: ReactNode;
}
