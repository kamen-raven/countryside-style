import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { generalContactsDataInterface } from '~data/constant/generalContacts/generalContactData.interface';
import { UsersInterface } from '~interfaces/users.interface';

export interface ContactsPageInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement > {
  employeesList: UsersInterface[];//teamMembersDataInterface[];
  generalContactsData: generalContactsDataInterface;
}
