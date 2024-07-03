import { Metadata } from "next";
import { LegalSupportPage } from "~pages/index";

// temp

// data
import { typePageEnum } from "~data/constant/servicesBlock/servicesPagesFor/typePageEnum";
import titleBlockData from "~data/constant/servicesBlock/servicesPagesFor/titleBlockData/titleBlockData";
import legalSupportServices from "~data/constant/servicesBlock/advantagesList/legalSupport/legalSupport";
import servicesCardsOfLegalSupport from "~data/constant/servicesBlock/servicesCards/legalSupportPage/servicesCardsOfLegalSupport";

import { getAllReviews } from "~api/Reviews/getReviews";

export const metadata: Metadata = {
  title: 'Услуги | Юридическое консультация и сопровождение',
  description: 'Хотите безопасно провести сделку с недвижимостью?',
};





export default async function PageLegalSupport() {
  const reviews = (await getAllReviews()).results; // запрос ОТЗЫВОВ


  return (
    <LegalSupportPage
      typePage={typePageEnum.legalSupport}
      titleBlockData={titleBlockData}
      advantagesListData={legalSupportServices}
      reviewsData={reviews}
      servicesCardsData={servicesCardsOfLegalSupport}
    />
  );
}
