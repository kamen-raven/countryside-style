import { Metadata } from "next";
import { LegalSupportPage } from "~pages/index";

// temp

// data
import { typePageEnum } from "~data/constant/servicesBlock/servicesPagesFor/typePageEnum";
import titleBlockData from "~data/constant/servicesBlock/servicesPagesFor/titleBlockData/titleBlockData";
import legalSupportServices from "~data/constant/servicesBlock/advantagesList/legalSupport/legalSupport";

import reviews from "~data/temp/reviewsData/reviewsData";

export const metadata: Metadata = {
  title: 'Услуги | Юридическое консультация и сопровождение',
  description: 'Хотите безопасно провести сделку с недвижимостью?',
};





export default function PageLegalSupport() {

  return (
    <LegalSupportPage
      typePage={typePageEnum.legalSupport}
      titleBlockData={titleBlockData}
      advantagesListData={legalSupportServices}
      reviewsData={reviews}
      />
  );
}
