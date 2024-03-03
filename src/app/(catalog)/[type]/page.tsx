import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getObjects } from "~api/Objects/getObjects";

import { RealEstateObjectInterface } from "~interfaces/objects.interface";
/* import { notFound } from "next/navigation"; */

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
    { type: 'flats'},
    { type: 'lands'},
    { type: 'houses-and-cottages'},
  ];
  return paths;
/*   const objectsType = await getObjects();
  return generateObjectsType(objectsType); */
}


export default async function PageType({ params }:  {params: { type: string }}) {
  const objectsType = await getObjects(); // получаем все объекты

  const getTypePage = (type: string) => { // проверяем параметры на соответствие категории объекта
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
  const typePage = getTypePage(params.type); // берем тип на основе params исходя из роута
  console.log(typePage);

  if (!typePage) {   // если такого нету, то возвращаем пустую страницу
    notFound();
  }

  const filterObjectsByCategory = (arr:  RealEstateObjectInterface[], category: string | null) => {
    return arr.filter(obj => obj.category === category);
  };                                 // в этой функции мы берем те объекты, которые соответствуют нашему пути
  const typeObjects = filterObjectsByCategory(objectsType, typePage);
  // вызываем функцию соответствия и потом передаем это в пропсы в страницу


  console.log(typeObjects);


  return (
    <div>
      страница с {params.type}
      {typeObjects.length}
    </div>
  );
}
