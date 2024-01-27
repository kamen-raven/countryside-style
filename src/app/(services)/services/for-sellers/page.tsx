import { Metadata } from "next";
import { ForSellersPage } from "~pages/index";

// temp

// data
import forSellersPageAdvantages from "~data/constant/advantagesList/forSellersPage/forSellersPageAdvantages";
import titleBlockData from "~data/constant/servicesBlock/servicesPagesFor/titleBlockData/titleBlockData";
import { typePageEnum } from "~data/constant/servicesBlock/servicesPagesFor/typePageEnum";
import reviews from "~data/temp/reviewsData/reviewsData";
import objectsTemplate from "~data/temp/objectsTemplateList/objectsDataTemplate";
import faqDataList from "~data/constant/faqBlock/faqDataList";

export const metadata: Metadata = {
  title: 'Услуги | Продавцам',
  description: 'Продадим Ваш дом или участок по максимальной цене в кратчайший срок',
};





export default function PageForSellers() {

  return (
    <ForSellersPage
      typePage={typePageEnum.sellers}
      titleBlockData={titleBlockData}
      advantagesListData={forSellersPageAdvantages}
      recentObjectsData={objectsTemplate}
      reviewsData={reviews}
      faqData={faqDataList}
      />
  );
}
