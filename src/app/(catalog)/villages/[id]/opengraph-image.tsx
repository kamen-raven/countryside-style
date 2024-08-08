import { notFound } from "next/navigation";
import { ImageResponse } from "next/og";
import { getAllVillages } from "~api/Villages/getAllVillages";
import { getVillageByID } from "~api/Villages/getVillageByID";
import formatPhotosArray from "~helpers/formatters/formatPhotosArray";

export const size = {
  width: 968,
  height: 504,
};

export const alt = 'Агентство недвижимости "Загородный стиль"';
export const contentType = 'image/png';

export default async function Image({ params }: { params: { id: string, type: 'villages' } }) {
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


  // весь массив фотографий и планов объекта
  const picturesArray = formatPhotosArray(currentVillage);

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
            maxHeight: '504px',
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
