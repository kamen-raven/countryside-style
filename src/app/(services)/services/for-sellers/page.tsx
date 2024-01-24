import { Metadata } from "next";
import { ServicesPage } from "~pages/index";

// temp
import teamMembersData from '~data/temp/employeesList/teamMembersData';

// data
import questionsForClients from '~data/constant/servicesBlock/questionsForClients/questionsForClients.ts';
import statisticalIndicatorsData from "~data/constant/servicesBlock/statisticalIndicators/statisticalIndicators";
import servicesData from "~data/constant/servicesBlock/servicesListData/servicesListData";

export const metadata: Metadata = {
  title: 'Наши услуги',
  description: 'Мы предоставляем полный комплекс услуг в сфере продажи и покупки загородных участков, домов и коттеджей в Ленинградской области.',
};




export default function PageServicesForSellers() {

  return (
    <div>hello</div>
  );
}
