import { Metadata } from "next";
import { LegalSupportPage } from "~pages/index";

// temp

// data
import { typePageEnum } from "~data/constant/servicesBlock/servicesPagesFor/typePageEnum";
import titleBlockData from "~data/constant/servicesBlock/servicesPagesFor/titleBlockData/titleBlockData";
import legalSupportServices from "~data/constant/servicesBlock/advantagesList/legalSupport/legalSupport";
import servicesCardsOfLegalSupport from "~data/constant/servicesBlock/servicesCards/legalSupportPage/servicesCardsOfLegalSupport";

import { getAllReviews } from "~api/Reviews/getReviews";
import { metaServicesLegalSupport } from "~meta/metadataPages";
import sortReviewsByDate from "~helpers/reviews/sortReviewsByDate";

export const metadata: Metadata = {
  title: metaServicesLegalSupport.title,
  description: metaServicesLegalSupport.description,
  keywords: metaServicesLegalSupport.keywords,
  openGraph: {
    title: metaServicesLegalSupport.title,
    description: metaServicesLegalSupport.description,
    siteName: metaServicesLegalSupport.openGraph.siteName,
    type: 'website',
    url: metaServicesLegalSupport.openGraph.url,
    images: [
      {
        url: '../../../opengraph-image.png',
        width:  metaServicesLegalSupport.openGraph.images.width,
        height:  metaServicesLegalSupport.openGraph.images.height,
        alt:  metaServicesLegalSupport.openGraph.images.alt,
      },
    ],
  },
};




export default async function PageLegalSupport() {
  const allReviews = sortReviewsByDate((await getAllReviews())); // запрос ОТЗЫВОВ
  const reviews = allReviews.toSpliced(8);

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
