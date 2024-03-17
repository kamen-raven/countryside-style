import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getObjectByID } from "~api/Objects/getObjectByID";

import { getAllVillages } from "~api/Villages/getAllVillages";
import { getObjectsInVillages } from "~api/Villages/getObjectsInVillages";
import { getVillageByID } from "~api/Villages/getVillageByID";

import { VillageObjectInterface } from "~interfaces/villages.interface";
/* import { notFound } from "next/navigation"; */
import { CardPage } from "~pages/index";


/* interface paths {
  type: string,
  alias: string
}

 */
export const metadata: Metadata = {
  title: 'CARD',
  description: 'CARD PAGE',
};

export async function generateStaticParams() {
  const villages = await getAllVillages(); // получаем все объекты
  /* формируем массив ID объектов для адресной строки */
  const idList: { id: string}[] = villages.map((obj: VillageObjectInterface) => ({ id: obj.id.toString()}));
  return idList;
}


export default async function VillageType({ params }:  {params: {id: string, type: 'villages' }}) {
  const villages = await getAllVillages(); // получаем все объекты
    // сравниваем и находим нужный объект из массива объектов по ID
  const idCurrentObj = villages.find(obj => obj.id.toString() === params.id);

  // если такого нет, то кидаем 404
  if (!idCurrentObj) {
    notFound();
  }
  // делаем запрос на сервер по uuid найденного ранее объекта и работаем с ним дальше
  const currentVillage = await getVillageByID(idCurrentObj.uuid);
  if (!currentVillage) {
    notFound();
  }

  // Получаем массив объектов "Объекты в поселке"
  const objectsInVillage = await getObjectsInVillages(currentVillage.uuid);
  console.log(objectsInVillage);

// Создаем массив промисов для каждого запроса getObjectByID
const objectsInVillagePromises = objectsInVillage.map(async (obj) => {
  const object = await getObjectByID(obj.re_object_in_villages);
  return object;
});

// Ждем завершения всех запросов
const allObjectsInVillage = await Promise.all(objectsInVillagePromises);

// Теперь у вас есть массив объектов, которые можно отрисовать
console.log(`allObjectsInVillage:${allObjectsInVillage}`);
console.log(allObjectsInVillage);







  return (
    <CardPage
      typePage={'villages'}
      objectData={currentVillage} commonObjects={allObjectsInVillage} />
  );
}
