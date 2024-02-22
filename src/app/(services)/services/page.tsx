import { Metadata } from "next";
import { AllServicesPage } from "~pages/index";


// data
import questionsForClients from '~data/constant/servicesBlock/allServicesPage/questionsForClients/questionsForClients';
import servicesData from "~data/constant/servicesBlock/allServicesPage/servicesListData/servicesListData";
import statisticalIndicatorsData from "~data/constant/servicesBlock/allServicesPage/statisticalIndicators/statisticalIndicators";
import { getAllUsers } from "~api/Users/getUsers";
import sortUsersList from "~helpers/sortUsersData";

export const metadata: Metadata = {
  title: 'Наши услуги',
  description: 'Мы предоставляем полный комплекс услуг в сфере продажи и покупки загородных участков, домов и коттеджей в Ленинградской области.',
};




export default async function PageServices() {
  const employeeInitialData = await getAllUsers(10); // берем 10 пользователей
  const employeeData = sortUsersList(employeeInitialData); // сортируем приходящий массив пользователей

  return (
    <AllServicesPage
      servicesListData={servicesData}
      employeesData={employeeData}
      questionsList={questionsForClients}
      statIndicatorsList={statisticalIndicatorsData} />
  );
}
