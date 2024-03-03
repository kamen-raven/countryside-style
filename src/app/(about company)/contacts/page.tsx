import { Metadata } from "next";
import { ContactsPage } from "~pages/index";

// api
import { getAllUsers } from "~api/Users/getUsers";
// temp

import generalContactsData from '~data/constant/generalContacts/generalContactsData';
import sortUsersList from "~helpers/users/sortUsersData";

export const metadata: Metadata = {
  title: 'Контакты',
  description: 'Агентство недвижимости «Загородный Стиль». Санкт-Петербург, пр. Просвещения, дом 80, к. 1, ТЦ «Прометей», 3 этаж, офис 3.1',
};

export default async function PageContacts() {
  const employeeInitialData = await getAllUsers(10); // берем 10 пользователей
  const employeeData = sortUsersList(employeeInitialData); // сортируем приходящий массив пользователей

  return (
    <ContactsPage employeesList={employeeData} generalContactsData={generalContactsData} />
  );
}

