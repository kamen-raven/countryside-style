import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getObjectByID } from "~api/Objects/getObjectByID";
import { getObjects } from "~api/Objects/getObjects";
import { RealEstateObjectInterface } from "~interfaces/objects.interface";
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
  const objects = await getObjects(); // получаем все объекты
  /* формируем массив ID объектов для адресной строки */
  const idList: { id: string}[] = objects.map((obj: RealEstateObjectInterface) => ({ id: obj.id.toString()}));
  return idList;
}


export default async function CardType({ params }:  {params: {id: string, type: 'flats' | 'lands' | 'houses-and-cottages' | 'cottages' }}) {
  const objects = await getObjects(); // получаем все объекты
  const uuidCurrentObj = objects.find(obj => obj.id.toString() === params.id);

  if (!uuidCurrentObj) {
    notFound();
  }
  const currentObject = await getObjectByID(uuidCurrentObj.uuid);
  if (!currentObject) {
    notFound();
  }

  return (
    <CardPage
    typePage={params.type}
    objectData={currentObject} />
  );
}
