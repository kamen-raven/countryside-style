import { Metadata } from "next";
import { AboutUsPage } from "~pages/index";

// temp
//import teamMembersData from '~data/temp/employeesList/teamMembersData';
import aboutUsPageAdvantages from "~data/constant/servicesBlock/advantagesList/aboutUsPage/aboutUsPageAdvantages";
import aboutUsPageFacts from '~data/constant/servicesBlock/advantagesList/aboutUsPage/aboutUsPageFacts';
import { getAllUsers } from "~api/Users/getUsers";
import sortUsersList from "~helpers/users/sortUsersData";
import { metaAboutUs } from "~meta/metadataPages";

export const metadata: Metadata = {
  title: metaAboutUs.title,
  description: metaAboutUs.description,
  keywords: metaAboutUs.keywords,
  openGraph: {
    title: metaAboutUs.title,
    description: metaAboutUs.description,
    siteName: metaAboutUs.openGraph.siteName,
    type: 'website',
    url: metaAboutUs.openGraph.url,
    images: [
      {
        url: '../../opengraph-image.png',
        width:  metaAboutUs.openGraph.images.width,
        height:  metaAboutUs.openGraph.images.height,
        alt:  metaAboutUs.openGraph.images.alt,
      },
    ],
  },
};




export default async function PageAbout() {
  const employeeInitialData = await getAllUsers(20); // берем 20 пользователей
  const employeeData = sortUsersList(employeeInitialData); // сортируем приходящий массив пользователей



  return (
    <AboutUsPage
    employeesData={employeeData}
    advantagesListData={aboutUsPageAdvantages}
    aboutUsPageFacts={aboutUsPageFacts} />
  );
}
