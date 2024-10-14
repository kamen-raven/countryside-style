import { Metadata } from "next";
import { notFound } from "next/navigation";

import { getAllReviews } from "~api/Reviews/getReviews";


import { CatalogPage } from "~pages/index";

import generalContactsData from "~data/constant/generalContacts/generalContactsData";
import { getAllVillages } from "~api/Villages/getAllVillages";
import filteredVillagesByVisible from "~helpers/objects/filteredVillagesByVisible";
import { metaCatalogPage } from "~meta/metadataPages";
import sortReviewsByDate from "~helpers/reviews/sortReviewsByDate";

export const metadata: Metadata = {
  title: `${metaCatalogPage.villages.category} | ${metaCatalogPage.villages.title}`,
  description: metaCatalogPage.villages.description,
  keywords: metaCatalogPage.villages.keywords,
  openGraph: {
    title: `${metaCatalogPage.villages.category} | ${metaCatalogPage.villages.title}`,
    description: metaCatalogPage.villages.description,
    siteName: metaCatalogPage.villages.title,
    url: `https://${metaCatalogPage.villages.openGraph.url}/villages/`,
    type: "website",
    images: [
      {
        url: '../../opengraph-image.png',
        width: metaCatalogPage.villages.openGraph.images.width,
        height: metaCatalogPage.villages.openGraph.images.height,
        alt: metaCatalogPage.villages.openGraph.images.alt,
      }
    ]
  },
};



export default async function PageVillages() {

  const allReviews = sortReviewsByDate((await getAllReviews())); // запрос ОТЗЫВОВ
  const reviews = allReviews.toSpliced(8);
  const villagesObjects = await getAllVillages(); // берем все поселки

  const visibleVillages = filteredVillagesByVisible(villagesObjects); // отображаем только те поселки, которые необходимо по условиям их видимости на сайте


  /*   const typeObjects = filteredObjectsByCategory(objectsType, typePage); // вызываем функцию сортировки и потом передаем это в пропсы в страницу
   */
  if (!villagesObjects) {   // если такого нету, то возвращаем пустую страницу
    notFound();
  }
  return (
    <CatalogPage typePage={'villages'}
      generalContactsData={generalContactsData}
      villagesData={visibleVillages}
      reviewsData={reviews}
    />
  );
}
