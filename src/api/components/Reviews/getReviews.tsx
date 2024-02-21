import { PATH_API } from "../../utils/path-api";
import { ApiReviewInterface } from "../../interfaces/review.interface";

export async function getAllReviews(): Promise<ApiReviewInterface> {
  try {
    const res = await fetch(PATH_API.reviews.allReviews, {
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
