import { Metadata } from "next";
import { ForCottageVillagesPage } from "~pages/index";

// temp

// data
import { typePageEnum } from "~data/constant/servicesBlock/servicesPagesFor/typePageEnum";
import titleBlockData from "~data/constant/servicesBlock/servicesPagesFor/titleBlockData/titleBlockData";
import servicesOffersData_forCottageVillages from "~data/constant/servicesBlock/servicesOffersData/servicesOffersData_forCottageVillages";
import teamMembersData from "~data/temp/employeesList/teamMembersData";
import villagesProjectsData from "~data/constant/servicesBlock/villagesProjectsData/villagesProjectsData";

export const metadata: Metadata = {
  title: 'Услуги | Коттеджным поселкам',
  description: 'Организуем маркетинг и продажи вашего коттеджного поселка',
};





export default function PageForCottageVillages() {

  return (
    <ForCottageVillagesPage
      typePage={typePageEnum.villages}
      titleBlockData={titleBlockData}
      offersListData={servicesOffersData_forCottageVillages}
      projectsData={villagesProjectsData}
      employeesData={teamMembersData}
      />
  );
}
