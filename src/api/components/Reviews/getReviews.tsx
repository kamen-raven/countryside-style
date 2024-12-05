import { PATH_API } from "../../utils/path-api";
import { ApiReviewInterface, ReviewInterface } from "~interfaces/review.interface";

export async function getAllReviews(pageSize = 15): Promise<ReviewInterface[]> {
  try {
    let allReviews: ReviewInterface[] = []; // Массив для всех отзывов
    let page = 1; // Начинаем с первой страницы
    let hasNextPage = true; // Флаг наличия следующей страницы

    // Цикл для перебора всех страниц
    while (hasNextPage) {
      // Создаем объект URLSearchParams и добавляем параметры запроса
      const params = new URLSearchParams();
      pageSize && params.append('page_size', pageSize.toString());
      params.append('page', page.toString());

      // Формируем URL с параметрами
      const url = `${PATH_API.reviews.allReviews}?${params.toString()}`;

      const res = await fetch(url, {
        method: 'GET',
        headers: new Headers({
          'content-type': 'application/json'
        }),
        next: {
          revalidate: 7200 // 2 часа // 86400 // сутки
        }
      });

      if (!res.ok) { // Обработка случаев, когда запрос вернулся неуспешным статусом
        throw new Error(`Error fetching data in getAllReviews. Status: ${res.status}`);
      }

      const data: ApiReviewInterface = await res.json();

      // Добавляем полученные результаты в общий массив
      allReviews = allReviews.concat(data.results);

      // Проверяем наличие следующей страницы
      if (data.next) {
        page++; // Увеличиваем номер страницы
      } else {
        hasNextPage = false; // Если next нет, значит достигли последней страницы
      }
    }

    return allReviews; // Возвращаем все отзывы
  } catch (error) { // Обработка ошибок
    console.error('Error in getAllReviews:', error);
    throw error;
  }
}



 /*  try {

    // Создаем объект URLSearchParams и добавляем параметры запроса
    const params = new URLSearchParams();

    pageSize && params.append('page_size', pageSize.toString());
    page && params.append('page', page.toString());

    // Формируем URL с параметрами
    const url = `${PATH_API.reviews.allReviews}?${params.toString()}`;

    const res = await fetch(url, {
      method: 'GET',
      headers: new Headers({
        'content-type': 'application/json'
      }),
      next: {
        revalidate: 86400 // сутки
      }
    });

    if (!res.ok) { // Обработка случаев, когда запрос вернулся неуспешным статусом
      throw new Error(`Error fetching data in getAllReviews. Status: ${res.status}`);
    }
    return res.json();
  } catch (error) { // Обработка других ошибок
    console.error('Error in getAllReviews:', error);
    throw error;
  }
}
 */
