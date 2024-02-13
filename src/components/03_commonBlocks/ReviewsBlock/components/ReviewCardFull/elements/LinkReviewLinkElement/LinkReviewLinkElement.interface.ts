import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ReviewInterface } from '~interfaces/review.interface';

export interface LinkReviewLinkElementInterface extends DetailedHTMLProps<HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  data: ReviewInterface;
}
