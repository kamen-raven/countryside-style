import { notFound } from "next/navigation";
import { ImageResponse } from "next/og";
import { getObjectByID } from "~api/Objects/getObjectByID";
import { getObjects } from "~api/Objects/getObjects";
import formatPhotosArray from "~helpers/formatters/formatPhotosArray";

export const size = {
  width: 968,
  height: 504,
};

export const alt = 'Агентство недвижимости "Загородный стиль"';


export default async function Image({ params }: { params: { id: string, type: 'flats' | 'lands' | 'houses-and-cottages' | 'villages' } }) {
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
  // весь массив фотографий и планов объекта
  const picturesArray = formatPhotosArray(currentObject);

  return new ImageResponse(
    (
      <div
        style={{
          background: "black",
          color: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          style={{
            objectFit: 'cover',
            maxWidth: '968px',
            maxHeight: '504px'
          }}
          width='100%'
          height="100%"
          src={picturesArray[0].image}
        />
      </div>
    ),
    { ...size }
  );
}
