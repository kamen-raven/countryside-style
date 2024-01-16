import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { GeneralContactsDataInterface } from '~data/GeneralContacts/GeneraLContactData.interface';

export interface ContactsBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  generalContactsData: GeneralContactsDataInterface;
  children?: ReactNode;
}
