import { Metadata } from "next";
import { ForSellersPage } from "~pages/index";

// temp

// data
import forSellersPageAdvantages from "~data/constant/servicesBlock/advantagesList/forSellersPage/forSellersPageAdvantages";
import titleBlockData from "~data/constant/servicesBlock/servicesPagesFor/titleBlockData/titleBlockData";
import servicesCardsForSellers from "~data/constant/servicesBlock/servicesCards/forSellersPage/servicesCardsForSellers";

import { typePageEnum } from "~data/constant/servicesBlock/servicesPagesFor/typePageEnum";

import faqDataList from "~data/constant/faqBlock/faqDataList";
import { getAllReviews } from "~api/Reviews/getReviews";
import { getObjects } from "~api/Objects/getObjects";
import filteredArchiveObjects from "~helpers/objects/filteredArchiveObjects";
import sortArchiveObjectsBySoldDate from "~helpers/objects/sortArchiveObjectsBySoldDate";

export const metadata: Metadata = {
  title: 'Услуги | Продавцам',
  description: 'Продадим Ваш дом или участок по максимальной цене в кратчайший срок',
};





export default async function PageForSellers() {
  const reviews = (await getAllReviews()).results; // запрос ОТЗЫВОВ
  const objects = await getObjects(); // получаем все объекты
  const archiveObjects = filteredArchiveObjects(objects);
  const sortedArchiveObjects = sortArchiveObjectsBySoldDate(archiveObjects).slice(0, 10);

  return (
    <ForSellersPage
      typePage={typePageEnum.sellers}
      titleBlockData={titleBlockData}
      advantagesListData={forSellersPageAdvantages}
      archiveObjectsData={sortedArchiveObjects}
      reviewsData={reviews}
      faqData={faqDataList}
      servicesCardsData={servicesCardsForSellers}
    />
  );
}
