import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { ReviewInterface } from '~interfaces/review.interface';
import { UsersInterface } from '~interfaces/users.interface';

export interface ReviewsPageInterface extends DetailedHTMLProps<HTMLAttributes<HTMLElement>,HTMLElement > {
  employeesData: UsersInterface[];//teamMembersDataInterface[];
  reviewsData: ReviewInterface[];
  children?: ReactNode;
}
