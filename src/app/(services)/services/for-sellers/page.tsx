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
import { metaServicesForSellers } from "~meta/metadataPages";
import sortReviewsByDate from "~helpers/reviews/sortReviewsByDate";



export const metadata: Metadata = {
  title: metaServicesForSellers.title,
  description: metaServicesForSellers.description,
  keywords: metaServicesForSellers.keywords,
  openGraph: {
    title: metaServicesForSellers.title,
    description: metaServicesForSellers.description,
    siteName: metaServicesForSellers.openGraph.siteName,
    type: 'website',
    url: metaServicesForSellers.openGraph.url,
    images: [
      {
        url: '../../../opengraph-image.png',
        width:  metaServicesForSellers.openGraph.images.width,
        height:  metaServicesForSellers.openGraph.images.height,
        alt:  metaServicesForSellers.openGraph.images.alt,
      },
    ],
  },
};





export default async function PageForSellers() {
  const allReviews = sortReviewsByDate((await getAllReviews())); // запрос ОТЗЫВОВ
  const reviews = allReviews.toSpliced(8);
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
