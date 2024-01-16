import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { teamMembersDataInterface } from '~data/EmployeesList/teamMembersData.interface';
import { GeneralContactsDataInterface } from '~data/GeneralContacts/GeneraLContactData.interface';

export interface ContactsPageInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement > {
  employeesList: teamMembersDataInterface[];
  generalContactsData: GeneralContactsDataInterface;
}
