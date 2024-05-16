import { Metadata } from "next";
import { notFound } from "next/navigation";

import { getAllReviews } from "~api/Reviews/getReviews";


import { CatalogPage } from "~pages/index";

import generalContactsData from "~data/constant/generalContacts/generalContactsData";
import { getAllVillages } from "~api/Villages/getAllVillages";


export const metadata: Metadata = {
  title: 'VILLAGES',
  description: 'CATALOG PAGE',
};



export default async function PageVillages() {

  const reviews = (await getAllReviews()).results; // запрос ОТЗЫВОВ
  const villagesObjects = await getAllVillages();


/*   const typeObjects = filteredObjectsByCategory(objectsType, typePage); // вызываем функцию сортировки и потом передаем это в пропсы в страницу
 */
  if (!villagesObjects) {   // если такого нету, то возвращаем пустую страницу
    notFound();
  }
  return (
    <CatalogPage typePage={'villages'}
      generalContactsData={generalContactsData}
      villagesData={villagesObjects}
      reviewsData={reviews}
    />
  );
}
