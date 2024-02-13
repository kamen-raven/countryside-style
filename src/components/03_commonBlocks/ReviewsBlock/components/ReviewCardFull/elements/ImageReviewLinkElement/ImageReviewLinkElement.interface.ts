import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { ReviewInterface } from '~interfaces/review.interface';

export interface ImageReviewLinkElementInterface extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  data: ReviewInterface; //reviewDataInterface;
  children?: ReactNode;
}
