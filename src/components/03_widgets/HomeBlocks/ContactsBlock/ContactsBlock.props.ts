import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { generalContactsDataInterface } from '~data/constant/generalContacts/generalContactData.interface';

export interface ContactsBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  generalContactsData: generalContactsDataInterface;
  children?: ReactNode;
}
