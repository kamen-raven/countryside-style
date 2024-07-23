import { RealEstateObjectInterface } from "~interfaces/objects.interface";


// Функция для получения и сортировки всех архивных объектов по дате от свежих к старым
function sortArchiveObjectsBySoldDate(data: RealEstateObjectInterface[]) {
  return data.sort((a, b) => {
    // Проверяем, если дата продажи отсутствует, чтобы избежать ошибок при преобразовании даты
    if (!a.date_sale) return 1;
    if (!b.date_sale) return -1;

    // Преобразуем даты в объекты Date для сравнения
    const dateA = new Date(a.date_sale);
    const dateB = new Date(b.date_sale);

    // Сравниваем даты и сортируем от новых к старым
    return dateB.getTime() - dateA.getTime();
  });
}

export default sortArchiveObjectsBySoldDate;
