import { Metadata } from "next";
import { ForBuyersPage } from "~pages/index";

// temp

// data
import { typePageEnum } from "~data/constant/servicesBlock/servicesPagesFor/typePageEnum";
import titleBlockData from "~data/constant/servicesBlock/servicesPagesFor/titleBlockData/titleBlockData";
import forBuyersPageAdvantages from "~data/constant/servicesBlock/advantagesList/forBuyersPage/forBuyersPageAdvantages";
import servicesCardsForBuyers from "~data/constant/servicesBlock/servicesCards/forBuyersPage/servicesCardsForBuyers";

import { getAllReviews } from "~api/Reviews/getReviews";
import { metaServicesForBuyers } from "~meta/metadataPages";
import sortReviewsByDate from "~helpers/reviews/sortReviewsByDate";


export const metadata: Metadata = {
  title: metaServicesForBuyers.title,
  description: metaServicesForBuyers.description,
  keywords: metaServicesForBuyers.keywords,
  openGraph: {
    title: metaServicesForBuyers.title,
    description: metaServicesForBuyers.description,
    siteName: metaServicesForBuyers.openGraph.siteName,
    type: 'website',
    url: metaServicesForBuyers.openGraph.url,
    images: [
      {
        url: '../../../opengraph-image.png',
        width:  metaServicesForBuyers.openGraph.images.width,
        height:  metaServicesForBuyers.openGraph.images.height,
        alt:  metaServicesForBuyers.openGraph.images.alt,
      },
    ],
  },
};




export default async function PageForBuyers() {
  const allReviews = sortReviewsByDate((await getAllReviews())); // запрос ОТЗЫВОВ
  const reviews = allReviews.toSpliced(8);

  return (
    <ForBuyersPage
      typePage={typePageEnum.buyers}
      titleBlockData={titleBlockData}
      advantagesListData={forBuyersPageAdvantages}
      reviewsData={reviews}
      servicesCardsData={servicesCardsForBuyers}
      />
  );
}
