import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { teamMembersDataInterface } from '~data/temp/employeesList/teamMembersData.interface';
import { ApiReviewInterface } from '~interfaces/review.interface';

export interface ReviewsPageInterface extends DetailedHTMLProps<HTMLAttributes<HTMLElement>,HTMLElement > {
  employeesData: teamMembersDataInterface[];
  reviewsData: ApiReviewInterface;
  children?: ReactNode;
}
