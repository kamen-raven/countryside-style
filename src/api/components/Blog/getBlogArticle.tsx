import { PATH_API } from "../../utils/path-api";
import { ApiBlogInterface } from "~interfaces/blog.interface";

export async function getBlogArticle(
  author__username?: string,
  pageSize?: number,
  page?: number,
): Promise<ApiBlogInterface> {
  try {

    // Создаем объект URLSearchParams и добавляем параметры запроса
    const params = new URLSearchParams();

    author__username && params.append('author__username', author__username.toString());
    pageSize && params.append('page_size', pageSize.toString());
    page && params.append('page', page.toString());

    // Формируем URL с параметрами
    const url = `${PATH_API.blog.allPosts}?${params.toString()}`;

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
      throw new Error(`Error fetching data in getBlogArticle. Status: ${res.status}`);
    }
    return res.json();
  } catch (error) { // Обработка других ошибок
    console.error('Error in getBlogArticle:', error);
    throw error;
  }
}
