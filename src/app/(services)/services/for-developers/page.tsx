import { Metadata } from "next";
import { ForDevelopersPage } from "~pages/index";

// temp

// data
import { typePageEnum } from "~data/constant/servicesBlock/servicesPagesFor/typePageEnum";
import titleBlockData from "~data/constant/servicesBlock/servicesPagesFor/titleBlockData/titleBlockData";

import servicesOffersData_forDevelopers from "~data/constant/servicesBlock/servicesOffersData/servicesOffersData_forDevelopers";
import { getAllReviews } from "~api/Reviews/getReviews";
import { getAllUsers } from "~api/Users/getUsers";
import sortUsersList from "~helpers/users/sortUsersData";
import { metaServicesForDevelopers } from "~meta/metadataPages";

export const metadata: Metadata = {
  title: metaServicesForDevelopers.title,
  description: metaServicesForDevelopers.description,
  keywords: metaServicesForDevelopers.keywords,
  openGraph: {
    title: metaServicesForDevelopers.title,
    description: metaServicesForDevelopers.description,
    siteName: metaServicesForDevelopers.openGraph.siteName,
    type: 'website',
    url: metaServicesForDevelopers.openGraph.url,
    images: [
      {
        url: '../../../opengraph-image.png',
        width:  metaServicesForDevelopers.openGraph.images.width,
        height:  metaServicesForDevelopers.openGraph.images.height,
        alt:  metaServicesForDevelopers.openGraph.images.alt,
      },
    ],
  },
};





export default async function PageForDevelopers() {
  const reviews = (await getAllReviews()).results; // запрос ОТЗЫВОВ
  const employeeInitialData = await getAllUsers(10); // берем 10 пользователей
  const employeeData = sortUsersList(employeeInitialData); // сортируем приходящий массив пользователей


  return (
    <ForDevelopersPage
      typePage={typePageEnum.developers}
      titleBlockData={titleBlockData}
      offersListData={servicesOffersData_forDevelopers}
      employeesData={employeeData}
      reviewsData={reviews}
      />
  );
}
