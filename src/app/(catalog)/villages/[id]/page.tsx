import { Metadata } from "next";
import { notFound } from "next/navigation";

import { getAllVillages } from "~api/Villages/getAllVillages";
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
  const uuidCurrentObj = villages.find(obj => obj.id.toString() === params.id);

  if (!uuidCurrentObj) {
    notFound();
  }
  const currentObject = await getVillageByID(uuidCurrentObj.uuid);
  if (!currentObject) {
    notFound();
  }

  return (
    <CardPage
      typePage={'villages'}
      objectData={currentObject} commonObjects={[]} />
  );
}
