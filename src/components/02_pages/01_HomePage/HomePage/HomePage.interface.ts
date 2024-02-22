import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { ReviewInterface } from '~interfaces/review.interface';
import { UsersInterface } from '~interfaces/users.interface';

export interface HomePageInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  reviewsData: ReviewInterface[];
  employeesData: UsersInterface[];
  children?: ReactNode;
}
