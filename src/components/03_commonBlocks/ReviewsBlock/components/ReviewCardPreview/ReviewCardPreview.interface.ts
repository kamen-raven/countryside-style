import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

import { ReviewInterface } from '~interfaces/review.interface';

export interface ReviewCardPreviewInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: ReviewInterface; //reviewDataInterface;
  children?: ReactNode;
}
