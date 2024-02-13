import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { ReviewInterface } from '~interfaces/review.interface';

export interface ReviewCardInfoContainerInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: ReviewInterface;
  className?: string;
  children?: ReactNode;
}
