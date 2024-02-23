import { PATH_API } from "../../utils/path-api";
import { ApiReviewInterface } from "~interfaces/review.interface";

export async function getAllReviews(pageSize?: number, page?: number): Promise<ApiReviewInterface> {
  try {

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
        revalidate: 10
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
