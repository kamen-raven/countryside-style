import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getObjectByID } from "~api/Objects/getObjectByID";
import { getUserByID } from "~api/Users/getUserByID";

import { getAllVillages } from "~api/Villages/getAllVillages";
import { getObjectsInVillages } from "~api/Villages/getObjectsInVillages";
import { getVillageByID } from "~api/Villages/getVillageByID";
import filteredVillagesByVisible from "~helpers/objects/filteredVillagesByVisible";

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
  const idList: { id: string }[] = villages.map((obj: VillageObjectInterface) => ({ id: obj.id.toString() }));
  return idList;
}


export default async function VillageType({ params }: { params: { id: string, type: 'villages' } }) {
  const villages = await getAllVillages(); // получаем все объекты
  const visibleVillages = filteredVillagesByVisible(villages); // отображаем только те поселки, которые необходимо по условиям их видимости на сайте


  // сравниваем и находим нужный объект из массива объектов по ID
  const idCurrentObj = visibleVillages.find(obj => obj.id.toString() === params.id);

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
  //console.log(objectsInVillage);

  // Создаем массив промисов для каждого запроса getObjectByID
  const objectsInVillagePromises = objectsInVillage.map(async (obj) => {
    const object = await getObjectByID(obj.re_object_in_villages);
    return object;
  });

  // Ждем завершения всех запросов
  const allObjectsInVillage = await Promise.all(objectsInVillagePromises);
  //console.log(`allObjectsInVillage:${allObjectsInVillage}`);
  //console.log(allObjectsInVillage);

  // получаем агента данного объекта
  const agentData = currentVillage.display_agents.length > 0 ? await getUserByID(currentVillage.display_agents[0].employee) : undefined;







  return (
    <CardPage
      typePage={'villages'}
      objectData={currentVillage} commonObjects={allObjectsInVillage} agentData={agentData} />
  );
}
