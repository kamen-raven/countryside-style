import { Metadata } from "next";
import { ForDevelopersPage } from "~pages/index";

// temp

// data
import { typePageEnum } from "~data/constant/servicesBlock/servicesPagesFor/typePageEnum";
import titleBlockData from "~data/constant/servicesBlock/servicesPagesFor/titleBlockData/titleBlockData";
import reviews from "~data/temp/reviewsData/reviewsData";

export const metadata: Metadata = {
  title: 'Услуги | Строительным бригадам и частным застройщикам',
  description: 'Инвестиции в загородную недвижимость',
};





export default function PageForDevelopers() {

  return (
    <ForDevelopersPage
      typePage={typePageEnum.developers}
      titleBlockData={titleBlockData}
      reviewsData={reviews}
      />
  );
}
