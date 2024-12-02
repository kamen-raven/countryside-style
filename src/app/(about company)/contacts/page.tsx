import { Metadata } from "next";
import { ContactsPage } from "~pages/index";

// api
import { getAllUsers } from "~api/Users/getUsers";
// temp

import generalContactsData from '~data/constant/generalContacts/generalContactsData';
import sortUsersList from "~helpers/users/sortUsersData";
import { metaContacts } from "~meta/metadataPages";

export const metadata: Metadata = {
  title: metaContacts.title,
  description: metaContacts.description,
  keywords: metaContacts.keywords,
  openGraph: {
    title: metaContacts.title,
    description: metaContacts.description,
    siteName: metaContacts.openGraph.siteName,
    type: 'website',
    url: metaContacts.openGraph.url,
    images: [
      {
        url: '../../opengraph-image.png',
        width:  metaContacts.openGraph.images.width,
        height:  metaContacts.openGraph.images.height,
        alt:  metaContacts.openGraph.images.alt,
      },
    ],
  },
};



export default async function PageContacts() {
  const employeeInitialData = await getAllUsers(20); // берем 20 пользователей
  const employeeData = sortUsersList(employeeInitialData); // сортируем приходящий массив пользователей

  return (
    <ContactsPage employeesList={employeeData} generalContactsData={generalContactsData} />
  );
}

