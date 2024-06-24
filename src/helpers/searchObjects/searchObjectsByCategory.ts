import { RealEstateObjectInterface } from "~interfaces/objects.interface";

function searchObjectsByCategory(data: RealEstateObjectInterface[], type: string) {

    const filteredObjects = data.filter((object) => {
      // Используем метод some для проверки наличия объекта с заданной категорией в массиве display_pages (отображение на сайте)
      return object.display_pages.some(
        (page) => page.display_pages.type_value === type
      );
    });
    return filteredObjects;
  }

  export default searchObjectsByCategory;
