import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { teamMembersDataInterface } from '~data/temp/employeesList/teamMembersData.interface';
import { generalContactsDataInterface } from '~data/constant/generalContacts/generalContactData.interface';

export interface ContactsPageInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement > {
  employeesList: teamMembersDataInterface[];
  generalContactsData: generalContactsDataInterface;
}
