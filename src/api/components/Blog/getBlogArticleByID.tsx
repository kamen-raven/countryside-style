import { PATH_API } from "../../utils/path-api";
import { BlogInterface } from "~interfaces/blog.interface";

export async function getBlogArticleByID(
  uuid: string,
): Promise<BlogInterface> {
  try {


    // Формируем URL с параметрами
    const url = PATH_API.blog.byID + uuid;

    const res = await fetch(url, {
      method: 'GET',
      headers: new Headers({
        'content-type': 'application/json'
      }),
      next: {
        revalidate: 6000
      }
    });

    if (!res.ok) { // Обработка случаев, когда запрос вернулся неуспешным статусом
      throw new Error(`Error fetching data in getBlogArticleByID. Status: ${res.status}`);
    }
    return res.json();
  } catch (error) { // Обработка других ошибок
    console.error('Error in getBlogArticleByID:', error);
    throw error;
  }
}
