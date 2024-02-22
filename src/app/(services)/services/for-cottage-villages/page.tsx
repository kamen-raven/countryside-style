import { Metadata } from "next";
import { ForCottageVillagesPage } from "~pages/index";

// temp

// data
import { typePageEnum } from "~data/constant/servicesBlock/servicesPagesFor/typePageEnum";
import titleBlockData from "~data/constant/servicesBlock/servicesPagesFor/titleBlockData/titleBlockData";
import servicesOffersData_forCottageVillages from "~data/constant/servicesBlock/servicesOffersData/servicesOffersData_forCottageVillages";
import villagesProjectsData from "~data/constant/servicesBlock/villagesProjectsData/villagesProjectsData";
import { getAllUsers } from "~api/Users/getUsers";
import sortUsersList from "~helpers/sortUsersData";

export const metadata: Metadata = {
  title: 'Услуги | Коттеджным поселкам',
  description: 'Организуем маркетинг и продажи вашего коттеджного поселка',
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
