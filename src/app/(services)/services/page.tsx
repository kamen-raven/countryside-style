import { Metadata } from "next";
import { AllServicesPage } from "~pages/index";


// data
import questionsForClients from '~data/constant/servicesBlock/allServicesPage/questionsForClients/questionsForClients';
import servicesData from "~data/constant/servicesBlock/allServicesPage/servicesListData/servicesListData";
import statisticalIndicatorsData from "~data/constant/servicesBlock/allServicesPage/statisticalIndicators/statisticalIndicators";
import { getAllUsers } from "~api/Users/getUsers";
import sortUsersList from "~helpers/users/sortUsersData";
import { metaServices } from "~meta/metadataPages";

export const metadata: Metadata = {
  title: metaServices.title,
  description: metaServices.description,
  keywords: metaServices.keywords,
  openGraph: {
    title: metaServices.title,
    description: metaServices.description,
    siteName: metaServices.openGraph.siteName,
    type: 'website',
    url: metaServices.openGraph.url,
    images: [
      {
        url: '../../opengraph-image.png',
        width:  metaServices.openGraph.images.width,
        height:  metaServices.openGraph.images.height,
        alt:  metaServices.openGraph.images.alt,
      },
    ],
  },
};





export default async function PageServices() {
  const employeeInitialData = await getAllUsers(20); // берем 20 пользователей
  const employeeData = sortUsersList(employeeInitialData); // сортируем приходящий массив пользователей

  return (
    <AllServicesPage
      servicesListData={servicesData}
      employeesData={employeeData}
      questionsList={questionsForClients}
      statIndicatorsList={statisticalIndicatorsData} />
  );
}
