import { Metadata } from "next";
import { ForCottageVillagesPage } from "~pages/index";

// temp

// data
import { typePageEnum } from "~data/constant/servicesBlock/servicesPagesFor/typePageEnum";
import titleBlockData from "~data/constant/servicesBlock/servicesPagesFor/titleBlockData/titleBlockData";
import servicesOffersData_forCottageVillages from "~data/constant/servicesBlock/servicesOffersData/servicesOffersData_forCottageVillages";
import villagesProjectsData from "~data/constant/servicesBlock/villagesProjectsData/villagesProjectsData";
import { getAllUsers } from "~api/Users/getUsers";
import sortUsersList from "~helpers/users/sortUsersData";
import { metaServicesForCottageVillages } from "~meta/metadataPages";


export const metadata: Metadata = {
  title: metaServicesForCottageVillages.title,
  description: metaServicesForCottageVillages.description,
  keywords: metaServicesForCottageVillages.keywords,
  openGraph: {
    title: metaServicesForCottageVillages.title,
    description: metaServicesForCottageVillages.description,
    siteName: metaServicesForCottageVillages.openGraph.siteName,
    type: 'website',
    url: metaServicesForCottageVillages.openGraph.url,
    images: [
      {
        url: '../../../opengraph-image.png',
        width:  metaServicesForCottageVillages.openGraph.images.width,
        height:  metaServicesForCottageVillages.openGraph.images.height,
        alt:  metaServicesForCottageVillages.openGraph.images.alt,
      },
    ],
  },
};





export default async function PageForCottageVillages() {
  const employeeInitialData = await getAllUsers(10); // берем 10 пользователей
  const employeeData = sortUsersList(employeeInitialData); // сортируем приходящий массив пользователей

  return (
    <ForCottageVillagesPage
      typePage={typePageEnum.villages}
      titleBlockData={titleBlockData}
      offersListData={servicesOffersData_forCottageVillages}
      projectsData={villagesProjectsData}
      employeesData={employeeData}
      />
  );
}
