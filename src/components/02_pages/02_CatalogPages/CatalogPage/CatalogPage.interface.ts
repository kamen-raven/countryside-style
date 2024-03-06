import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { generalContactsDataInterface } from '~data/constant/generalContacts/generalContactData.interface';
import { RealEstateObjectInterface } from '~interfaces/objects.interface';
import { ReviewInterface } from '~interfaces/review.interface';

export interface CatalogPageInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement > {
  typePage: 'flats' | 'lands' | 'houses-and-cottages';
  objectsData: RealEstateObjectInterface[];//objectItemInterface[];
  generalContactsData: generalContactsDataInterface;
  reviewsData: ReviewInterface[];
}
