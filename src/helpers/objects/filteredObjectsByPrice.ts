import { RealEstateObjectInterface } from "~interfaces/objects.interface";
import filteredObjectsByCategory from "./filteredObjectsByCategory";

function filterObjectsByPrice (arr: RealEstateObjectInterface[], category: string) {
  // в этой функции мы берем те объекты, которые соответствуют нашему пути и сортируем их по стоимости от меньшей к большей
  //* добавление по "Отображению на сайте".
  const filteredObjects = filteredObjectsByCategory(arr, category);

  const sortedObjects = filteredObjects.sort((a, b) => a.price - b.price);  // сортируем полученный массив по стоимости от меньшей к большей
  return sortedObjects;
}

export default filterObjectsByPrice;
