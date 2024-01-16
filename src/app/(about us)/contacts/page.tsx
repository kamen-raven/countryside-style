import { Metadata } from "next";
import { ContactsPage } from "~pages/index";

// temp
import teamMembersData from '~data/EmployeesList/teamMembersData';
import GeneralContactsData from '~data/GeneralContacts/GeneralContactsData.ts';


export const metadata: Metadata = {
  title: 'Контакты',
  description: 'Агентство недвижимости «Загородный Стиль». Санкт-Петербург, пр. Просвещения, дом 80, к. 1, ТЦ «Прометей», 3 этаж, офис 3.1',
};

export default function PageContacts() {

  return (
    <ContactsPage employeesList={teamMembersData} generalContactsData={GeneralContactsData}   />
  );
}

