import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { generalContactsDataInterface } from '~data/constant/generalContacts/generalContactData.interface';
import { objectItemInterface } from '~data/temp/objectsTemplateList/objectItem.interface';

export interface CatalogPageInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement > {
  type: string;
  objectsData: objectItemInterface[];
  generalContactsData: generalContactsDataInterface;
}
