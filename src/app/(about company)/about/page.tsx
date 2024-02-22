import { Metadata } from "next";
import { AboutUsPage } from "~pages/index";

// temp
//import teamMembersData from '~data/temp/employeesList/teamMembersData';
import aboutUsPageAdvantages from "~data/constant/servicesBlock/advantagesList/aboutUsPage/aboutUsPageAdvantages";
import aboutUsPageFacts from '~data/constant/servicesBlock/advantagesList/aboutUsPage/aboutUsPageFacts';
import { getAllUsers } from "~api/Users/getUsers";
import sortUsersList from "~helpers/sortUsersData";

export const metadata: Metadata = {
  title: 'О компании',
  description: 'Загородный стиль – это специализированное агентство по загородной недвижимости.',
};




export default async function PageAbout() {
  const employeeInitialData = await getAllUsers(10); // берем 10 пользователей
  const employeeData = sortUsersList(employeeInitialData); // сортируем приходящий массив пользователей



  return (
    <AboutUsPage
    employeesData={employeeData}
    advantagesListData={aboutUsPageAdvantages}
    aboutUsPageFacts={aboutUsPageFacts} />
  );
}
