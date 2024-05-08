import { RealEstateObjectInterface } from "~interfaces/objects.interface";

function filteredObjectsByCategory(
  arr: RealEstateObjectInterface[],
  category: string
) {
  //* добавление по "Отображению на сайте".
  // Используем метод filter для фильтрации массива объектов
  const filteredObjects = arr.filter((object) => {
    // Используем метод some для проверки наличия объекта с заданной категорией в массиве display_pages (отображение на сайте)
    return object.display_pages.some(
      (page) => page.display_pages.value === category
    );

    //? РАНЕЕ - Добавление сразу по категории
    //return arr.filter(obj => obj.category === category).sort((a, b) => a.price - b.price);
  });
  return filteredObjects;
}

export default filteredObjectsByCategory;
