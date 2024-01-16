import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { GeneralContactsDataInterface } from '~data/GeneralContacts/GeneraLContactData.interface';

export interface MapBlockInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  mapInfoData: GeneralContactsDataInterface;
  children?: ReactNode;
}
