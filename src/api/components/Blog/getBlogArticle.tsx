import { PATH_API } from "../../utils/path-api";
import { ApiBlogInterface } from "~interfaces/blog.interface";

export async function getBlogArticle(
  pageSize?: number,
  page?: number,
  author__username?: string,
): Promise<ApiBlogInterface> {
  try {

    // Создаем объект URLSearchParams и добавляем параметры запроса
    const params = new URLSearchParams();

    pageSize && params.append('page_size', pageSize.toString());
    page && params.append('page', page.toString());
    author__username && params.append('author__username', author__username);

    // Формируем URL с параметрами
    const url = `${PATH_API.blog.allPosts}?${params.toString()}`;

    const res = await fetch(url, {
      method: 'GET',
      headers: new Headers({
        'content-type': 'application/json'
      }),
      next: {
        revalidate: 7200 // 2 часа
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
