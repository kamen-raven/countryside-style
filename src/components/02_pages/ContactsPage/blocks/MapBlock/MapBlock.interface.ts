import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { generalContactsDataInterface } from '~data/constant/generalContacts/generalContactData.interface';

export interface MapBlockInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  mapInfoData: generalContactsDataInterface;
  children?: ReactNode;
}
