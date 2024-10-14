import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getObjects } from "~api/Objects/getObjects";
import { getAllReviews } from "~api/Reviews/getReviews";

import { CatalogPage } from "~pages/index";

import generalContactsData from "~data/constant/generalContacts/generalContactsData";
import filteredObjectsByCategory from "~helpers/objects/filteredObjectsByCategory";
import sortedObjectsByPrice from "~helpers/objects/sortedObjectsByPrice";
import { RealEstateObjectInterface } from "~interfaces/objects.interface";
import { metaCatalogPage } from "~meta/metadataPages";
import sortReviewsByDate from "~helpers/reviews/sortReviewsByDate";


export async function generateMetadata({ params }: { params: { type: 'flats' | 'lands' | 'houses-and-cottages' } }): Promise<Metadata> {
  const typePage = metaCatalogPage[params.type]; // берем тип на основе params исходя из роута

  if (!typePage) {   // если такого нету, то возвращаем пустую страницу
    notFound();
  }

  return {
    title: `${typePage.category} | ${typePage.title}`,
    description: typePage.description,
    keywords: typePage.keywords,
    openGraph: {
      title: `${typePage.category} | ${typePage.title}`,
      description: typePage.description,
      siteName: typePage.title,
      url: `https://${typePage.openGraph.url}/${params.type}`,
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
}



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

  const allReviews = sortReviewsByDate((await getAllReviews())); // запрос ОТЗЫВОВ
  const reviews = allReviews.toSpliced(8);
  const objectsType = await getObjects(); // получаем все объекты


  // вызываем функцию сортировки и потом передаем это в пропсы в страницу
  const sortingObjects = (arr: RealEstateObjectInterface[], type: string) => {
    const filteredArr = filteredObjectsByCategory(arr, type); // фильтруем изначальный массив по типу страницы
    const sortedArr = sortedObjectsByPrice(filteredArr);  // сортируем полученный массив по стоимости от меньшей к большей
    return sortedArr;
  };

  const sortedObjects = sortingObjects(objectsType, typePage);
  const allObjects = sortedObjectsByPrice(objectsType);


  return (
    <CatalogPage
      typePage={params.type}
      generalContactsData={generalContactsData}
      objectsData={sortedObjects}
      reviewsData={reviews}
      allObjects={allObjects}
    />
  );
}
