import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getObjectByID } from "~api/Objects/getObjectByID";
import { getObjects } from "~api/Objects/getObjects";
import { getObjectsIsLike } from "~api/Objects/getObjectsIsLike";
import { getUserByID } from "~api/Users/getUserByID";
import { RealEstateObjectInterface } from "~interfaces/objects.interface";
import { metaCatalogPage } from "~meta/metadataPages";
import { CardPage } from "~pages/index";




export async function generateMetadata({ params }: { params: { id: string, type: 'flats' | 'lands' | 'houses-and-cottages' | 'villages' } }): Promise<Metadata> {
  const typePage = metaCatalogPage[params.type]; // берем тип на основе params исходя из роута
  if (!typePage) {   // если такого нету, то возвращаем пустую страницу
    notFound();
  }

  // получаем все объекты
  const objects = await getObjects();

  // сравниваем и находим нужный объект из массива объектов по ID
  const idCurrentObj = objects.find(obj => obj.id.toString() === params.id);
  // если такого нет, то кидаем 404
  if (!idCurrentObj) {
    notFound();
  }

  // делаем запрос на сервер по uuid найденного ранее объекта и работаем с ним дальше
  const currentObject = idCurrentObj &&  await getObjectByID(idCurrentObj.uuid);

  return {
    title: `${typePage.category} ${currentObject?.name}`,
    description: currentObject?.place,
    openGraph: {
      title: `${typePage.category} | ${currentObject?.name}`,
      description: currentObject?.place,
      siteName: typePage.title,
      url: `https://${typePage.openGraph.url}/${params.type}/${params.id}`,
      type: "website",
    },
  };
}



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

  // проверка типа объекта на соответствие раздела каталога
  if (!currentObject || currentObject.category !== typePage) {
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
