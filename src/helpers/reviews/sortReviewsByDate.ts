import { ReviewInterface } from "~interfaces/review.interface";

// Функция для получения и сортировки всех отзывов по дате от старых к новым
function sortReviewsByDate(data: ReviewInterface[]) {
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

export default sortReviewsByDate;
