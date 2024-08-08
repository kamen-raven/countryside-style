import { VillageObjectInterface } from "~interfaces/villages.interface";

function filteredVillagesByVisible(
  arr: VillageObjectInterface[]
) {
  //* добавление по "Отображению на сайте".
  // Используем метод filter для фильтрации массива объектов
  const filteredVillages = arr.filter((object) => {
    return object.visible_on_site === true;
  });
  return filteredVillages;
}

export default filteredVillagesByVisible;
