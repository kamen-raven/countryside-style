import { Metadata } from "next";
import { AllServicesPage } from "~pages/index";

// temp
import teamMembersData from '~data/temp/employeesList/teamMembersData';

// data
import questionsForClients from '~data/constant/servicesBlock/allServicesPage/questionsForClients/questionsForClients';
import servicesData from "~data/constant/servicesBlock/allServicesPage/servicesListData/servicesListData";
import statisticalIndicatorsData from "~data/constant/servicesBlock/allServicesPage/statisticalIndicators/statisticalIndicators";

export const metadata: Metadata = {
  title: 'Наши услуги',
  description: 'Мы предоставляем полный комплекс услуг в сфере продажи и покупки загородных участков, домов и коттеджей в Ленинградской области.',
};




export default function PageServices() {

  return (
    <AllServicesPage
      servicesListData={servicesData}
      employeesData={teamMembersData}
      questionsList={questionsForClients}
      statIndicatorsList={statisticalIndicatorsData} />
  );
}
