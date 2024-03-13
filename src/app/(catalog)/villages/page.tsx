import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getObjects } from "~api/Objects/getObjects";
import { getAllReviews } from "~api/Reviews/getReviews";

import { RealEstateObjectInterface } from "~interfaces/objects.interface";
import { CatalogPage } from "~pages/index";

import generalContactsData from "~data/constant/generalContacts/generalContactsData";
import { getAllVillages } from "~api/Villages/getAllVillages";

/* interface paths {
  type: string,
  alias: string
}

 */
export const metadata: Metadata = {
  title: 'VILLAGES',
  description: 'CATALOG PAGE',
};



export default async function PageVillages() {

  const reviews = (await getAllReviews()).results; // запрос ОТЗЫВОВ
  const villagesObjects = await getAllVillages();

  return (
    <CatalogPage typePage={'villages'}
      generalContactsData={generalContactsData}
      villagesData={villagesObjects}
      reviewsData={reviews}
    />
  );
}
