import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getObjects } from "~api/Objects/getObjects";
import { getAllReviews } from "~api/Reviews/getReviews";

import { RealEstateObjectInterface } from "~interfaces/objects.interface";
import { CatalogPage } from "~pages/index";

import generalContactsData from "~data/constant/generalContacts/generalContactsData";

/* interface paths {
  type: string,
  alias: string
}

 */
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
  /*   const objectsType = await getObjects();
    return generateObjectsType(objectsType); */
}


export default async function PageType({ params }: { params: { type: 'flats' | 'lands' | 'houses-and-cottages' } }) {
  /*  const getTypePage = (type: string) => { // проверяем параметры на соответствие категории объекта
    switch (type) {
      case 'flats':
        return 'Квартиры';
      case 'lands':
        return 'Земельный участок';
      case 'houses-and-cottages':
        return 'Дома, дачи, коттеджи';
      default:
        return null;
    }
  };
  */


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


  const filterObjectsByCategory = (arr: RealEstateObjectInterface[], category: string) => { // в этой функции мы берем те объекты, которые соответствуют нашему пути и сортируем их по стоимости от меньшей к большей
    //* добавление по "Отображению на сайте".
    // Используем метод filter для фильтрации массива объектов
    const filteredObjects = arr.filter(object => {
      // Используем метод some для проверки наличия объекта с заданной категорией в массиве display_pages
      return object.display_pages.some(page => page.display_pages.value === category);
    });
    const sortedObjects = filteredObjects.sort((a, b) => a.price - b.price);  // сортируем полученный массив по стоимости от меньшей к большей
    return sortedObjects;
    //*

    //? РАНЕЕ - Добавление сразу по категории
    //return arr.filter(obj => obj.category === category).sort((a, b) => a.price - b.price);
  };




  const typeObjects = filterObjectsByCategory(objectsType, typePage); // вызываем функцию соответствия и потом передаем это в пропсы в страницу



  return (
    <CatalogPage typePage={params.type}
      generalContactsData={generalContactsData}
      objectsData={typeObjects}
      reviewsData={reviews}
    />
  );
}
