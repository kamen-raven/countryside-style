import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { ReviewInterface } from '~interfaces/review.interface';

export interface ReviewPopupButtonInterface extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  type: 'reviewFull' | 'reviewImage';
  data: ReviewInterface;
  children?: ReactNode;
}
