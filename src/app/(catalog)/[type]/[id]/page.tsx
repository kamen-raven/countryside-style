import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getObjectByID } from "~api/Objects/getObjectByID";
import { getObjects } from "~api/Objects/getObjects";
import { getObjectsIsLike } from "~api/Objects/getObjectsIsLike";
import { getUserByID } from "~api/Users/getUserByID";
import { RealEstateObjectInterface } from "~interfaces/objects.interface";
/* import { notFound } from "next/navigation"; */
import { CardPage } from "~pages/index";


export const metadata: Metadata = {
  title: 'CARD',
  description: 'CARD PAGE',
};

export async function generateStaticParams() {
  const objects = await getObjects(); // получаем все объекты
  /* формируем массив ID объектов для адресной строки */
  const idList: { id: string }[] = objects.map((obj: RealEstateObjectInterface) => ({ id: obj.id.toString() }));

  return idList;
}


export default async function CardType({ params }: { params: { id: string, type: 'flats' | 'lands' | 'houses-and-cottages' | 'villages' } }) {
  // получаем все объекты
  const objects = await getObjects();

  const category = {
    flats: 'Квартиры',
    lands: 'Земельные участки',
    'houses-and-cottages': 'Дома, дачи, коттеджи',
    'villages': 'Коттеджные поселки'
  };

  const typePage = category[params.type]; // берем тип на основе params исходя из роута



    if (!typePage) {   // если такого нету, то возвращаем пустую страницу
      notFound();
    }
  // сравниваем и находим нужный объект из массива объектов по ID
  const idCurrentObj = objects.find(obj => obj.id.toString() === params.id);


  // если такого нет, то кидаем 404
  if (!idCurrentObj) {
    notFound();
  }

  // делаем запрос на сервер по uuid найденного ранее объекта и работаем с ним дальше
  const currentObject = await getObjectByID(idCurrentObj.uuid);
  if (!currentObject) {
    notFound();
  }

  // Получаем массив объектов "Похожие объекты"
  const objectsIsLike = await getObjectsIsLike(currentObject.uuid);
  //console.log(objectsIsLike);

  // Создаем массив промисов для каждого запроса getObjectByID
  const objectsPromises = objectsIsLike.map(async (obj) => {
    const object = await getObjectByID(obj.close_re_object);
    return object;
  });

  // Ждем завершения всех запросов
  const commonObjects = await Promise.all(objectsPromises);
  //console.log(`commonObjects:${commonObjects}`);
  //console.log(commonObjects);

  // получаем агента данного объекта
  const agentData = currentObject.display_agents.length > 0 ? await getUserByID(currentObject.display_agents[0].employee) : undefined;


  return (
    <CardPage
      typePage={params.type}
      objectData={currentObject}
      commonObjects={commonObjects}
      agentData={agentData}
      />
  );
}
