import { RealEstateObjectInterface } from "~interfaces/objects.interface";

function filteredArchiveObjects(
  arr: RealEstateObjectInterface[]
) {
  // Используем метод filter для фильтрации массива объектов
  const filteredArchiveObjects = arr.filter((object) => {
    // Используем метод some для проверки наличия объекта с заданной категорией в массиве display_pages (отображение на сайте)
    return object.display_pages.some(
      (page) => page.display_pages.value === 'Архив'
    );
  });



  return filteredArchiveObjects;
}

export default filteredArchiveObjects;
