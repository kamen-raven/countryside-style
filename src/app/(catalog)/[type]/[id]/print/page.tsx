'use client';

import { notFound, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { getObjectByID } from "~api/Objects/getObjectByID";
import { getObjects } from "~api/Objects/getObjects";

import { getUserByID } from "~api/Users/getUserByID";
import { PrintPage } from "~pages/index";

import { useDataForPrintStore } from "~store/objectsCardStore/useDataForPrintStore";
import Loading from "../../../../loading";


export default function PagePrint() {

  // стейт ЗУСТАНД
  const {
    objectData,
    agentData,
    actions: {
      setObjectData,
      setAgentData,
    }
  } = useDataForPrintStore();


  const pathname = usePathname(); //
  const [error, setError] = useState(false); // стейт для отображения страницы 404

  useEffect(() => {
  // если у нас идет прямой переход по ссылке или что-то не записалось в стейт -
  //  мы запрашиваем информацию об объекте с сервера
    if (!objectData || !agentData) {
      const getObjectData = async () => {
        const objectID = pathname.split('/')[2]; // берем поле ID

        // получаем все объекты
        const objects = await getObjects();

        // сравниваем и находим нужный объект из массива объектов по ID
        const idCurrentObj = objects.find(obj => obj.id.toString() === objectID);

        // если такого нет, то кидаем 404
        if (!idCurrentObj) {
          setError(true);
          return;
          //notFound();
        }

        // делаем запрос на сервер по uuid найденного ранее объекта и работаем с ним дальше
        const currentObject = await getObjectByID(idCurrentObj.uuid);
        if (!currentObject) {
          setError(true);
          return;
        }

        // если у нас нет агента
        // получаем агента данного объекта
        const agent = (currentObject.display_agents.length > 0) ?
          await getUserByID(currentObject.display_agents[0].employee) : undefined;

        // записываем новые данные в стейт для дальнейшей работы
        setObjectData(currentObject);
        agent && setAgentData(agent);
      };

      getObjectData();
    }
  }, [objectData, agentData, pathname]);


  // отображение страницы 404 если нет данных на сервере
  if (error) {
    notFound();
  }

  // рендеринг прелоадера
  if (!objectData || !agentData) {
    return Loading();
  }






  return (
    <>
      {(objectData ) &&
        <PrintPage objectData={objectData} agentData={agentData} />
      }
    </>

  );
}
