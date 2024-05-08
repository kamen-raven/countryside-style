import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getObjects } from "~api/Objects/getObjects";
import { getAllReviews } from "~api/Reviews/getReviews";

import { CatalogPage } from "~pages/index";

import generalContactsData from "~data/constant/generalContacts/generalContactsData";
import filterObjectsByPrice from "~helpers/objects/filteredObjectsByPrice";


export const metadata: Metadata = {
  title: 'HOUSES',
  description: 'CATALOG PAGE',
};

export async function generateStaticParams() {
  const paths = [
    { type: 'flats' },
    { type: 'lands' },
    { type: 'houses-and-cottages' },
  ];
  return paths;
}


export default async function PageType({ params }: { params: { type: 'flats' | 'lands' | 'houses-and-cottages' } }) {


  const category = {
    flats: 'Квартиры',
    lands: 'Земельные участки',
    'houses-and-cottages': 'Дома, дачи, коттеджи',
  };

  const typePage = category[params.type]; // берем тип на основе params исходя из роута
  
  if (!typePage) {   // если такого нету, то возвращаем пустую страницу
    notFound();
  }

  const reviews = (await getAllReviews()).results; // запрос ОТЗЫВОВ
  const objectsType = await getObjects(); // получаем все объекты

  const typeObjects = filterObjectsByPrice(objectsType, typePage); // вызываем функцию сортировки и потом передаем это в пропсы в страницу

  return (
    <CatalogPage typePage={params.type}
      generalContactsData={generalContactsData}
      objectsData={typeObjects}
      reviewsData={reviews}
    />
  );
}
