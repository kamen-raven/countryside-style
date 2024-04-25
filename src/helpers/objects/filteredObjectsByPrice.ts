import { RealEstateObjectInterface } from "~interfaces/objects.interface";

function filterObjectsByPrice (arr: RealEstateObjectInterface[], category: string) { // в этой функции мы берем те объекты, которые соответствуют нашему пути и сортируем их по стоимости от меньшей к большей
  //* добавление по "Отображению на сайте".
  // Используем метод filter для фильтрации массива объектов
  const filteredObjects = arr.filter(object => {
    // Используем метод some для проверки наличия объекта с заданной категорией в массиве display_pages (отображение на сайте)
    return object.display_pages.some(page => page.display_pages.value === category);
  });
  const sortedObjects = filteredObjects.sort((a, b) => a.price - b.price);  // сортируем полученный массив по стоимости от меньшей к большей
  return sortedObjects;
  //*

  //? РАНЕЕ - Добавление сразу по категории
  //return arr.filter(obj => obj.category === category).sort((a, b) => a.price - b.price);
}

export default filterObjectsByPrice;
