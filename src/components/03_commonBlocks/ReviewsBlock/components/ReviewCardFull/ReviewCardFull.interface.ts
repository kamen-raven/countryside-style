import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ReviewInterface } from '~interfaces/review.interface';

export interface ReviewCardFullInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: ReviewInterface; //reviewDataInterface;
}
