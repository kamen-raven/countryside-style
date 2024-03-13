import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { generalContactsDataInterface } from '~data/constant/generalContacts/generalContactData.interface';
import { RealEstateObjectInterface } from '~interfaces/objects.interface';
import { ReviewInterface } from '~interfaces/review.interface';
import { VillageObjectInterface } from '~interfaces/villages.interface';

export interface CatalogPageInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement > {
  typePage: 'flats' | 'lands' | 'houses-and-cottages' | 'villages';
  objectsData?: RealEstateObjectInterface[];//objectItemInterface[];
  villagesData?: VillageObjectInterface[];//objectItemInterface[];
  generalContactsData: generalContactsDataInterface;
  reviewsData: ReviewInterface[];
}
