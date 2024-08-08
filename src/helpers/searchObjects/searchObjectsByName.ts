//import sortedObjectsByPrice from "~helpers/objects/sortedObjectsByPrice";
import { RealEstateObjectInterface } from "~interfaces/objects.interface";

function searchObjectsByName(data: RealEstateObjectInterface[], term: string) {
  // в этой функции мы берем все актуальные объекты
  // и делаем поиск по совпадению в названии / в адресе / в категории объекта
  const filteredData = data.filter(
    (item: RealEstateObjectInterface) =>
      (item.name && item.name.toLowerCase().includes(term.toLowerCase())) ||
      (item.place && item.place.toLowerCase().includes(term.toLowerCase())) ||
      (item.type_house &&
        item.type_house.toLowerCase().includes(term.toLowerCase()))
  );

  // сортируем полученный массив по стоимости от меньшей к большей
  //const sortedObjects = sortedObjectsByPrice(filteredData);
  // ?
  /*   // и затем все получившиеся объекты сортируем по дате от самых новых к самым старым
  const sortedObjects = filteredData.sort(
    (a, b) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  ); */
  return filteredData;
}

export default searchObjectsByName;
