import { RealEstateObjectInterface } from "~interfaces/objects.interface";

function sortedObjectsByPrice (arr: RealEstateObjectInterface[]) {
  // в этой функции мы берем объекты и сортируем их по стоимости от меньшей к большей

  const sortedObjects = arr.sort((a, b) => a.price - b.price);  // сортируем полученный массив по стоимости от меньшей к большей
  return sortedObjects;
}

export default sortedObjectsByPrice;
