import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { ApiBlogInterface } from '~interfaces/blog.interface';
import { RealEstateObjectInterface } from '~interfaces/objects.interface';
import { ReviewInterface } from '~interfaces/review.interface';
import { UsersInterface } from '~interfaces/users.interface';
import { VillageObjectInterface } from '~interfaces/villages.interface';

export interface HomePageInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  mainPageObjectsData: RealEstateObjectInterface[];
  mainPageVillagesData: VillageObjectInterface[];
  reviewsData: ReviewInterface[];
  employeesData: UsersInterface[];
  blogPostsData: ApiBlogInterface;
  children?: ReactNode;
}
