import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { generalContactsDataInterface } from '~data/constant/generalContacts/generalContactData.interface';

export interface AddressElementInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  addressInfoData: generalContactsDataInterface;
}
