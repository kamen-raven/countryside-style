import { Metadata } from "next";
import { ForDevelopersPage } from "~pages/index";

// temp

// data
import { typePageEnum } from "~data/constant/servicesBlock/servicesPagesFor/typePageEnum";
import titleBlockData from "~data/constant/servicesBlock/servicesPagesFor/titleBlockData/titleBlockData";

import servicesOffersData_forDevelopers from "~data/constant/servicesBlock/servicesOffersData/servicesOffersData_forDevelopers";
import { getAllReviews } from "~api/Reviews/getReviews";
import { getAllUsers } from "~api/Users/getUsers";
import sortUsersList from "~helpers/sortUsersData";

export const metadata: Metadata = {
  title: 'Услуги | Строительным бригадам и частным застройщикам',
  description: 'Инвестиции в загородную недвижимость',
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
