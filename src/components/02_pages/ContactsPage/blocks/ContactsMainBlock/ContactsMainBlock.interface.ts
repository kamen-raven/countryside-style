import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { GeneralContactsDataInterface } from '~data/GeneralContacts/GeneraLContactData.interface';

export interface ContactsMainBlockInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  generalContactsData: GeneralContactsDataInterface;
  children?: ReactNode;
}
