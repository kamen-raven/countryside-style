import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { GeneralContactsDataInterface } from '~data/GeneralContacts/GeneraLContactData.interface';

export interface AddressElementInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  addressInfoData: GeneralContactsDataInterface;
}
