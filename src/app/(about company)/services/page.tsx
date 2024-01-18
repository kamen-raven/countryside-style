import { Metadata } from "next";
import { AboutUsPage } from "~pages/index";

// temp
import teamMembersData from '~data/temp/employeesList/teamMembersData';

export const metadata: Metadata = {
  title: 'Наши услуги',
  description: 'Мы предоставляем полный комплекс услуг в сфере продажи и покупки загородных участков, домов и коттеджей в Ленинградской области.',
};




export default function PageServices() {

  return (
    <AboutUsPage employeesData={teamMembersData} />
  );
}
