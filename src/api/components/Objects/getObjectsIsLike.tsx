import { PATH_API } from "../../utils/path-api";
import { ObjectsIsLikeInterface } from "~interfaces/objects.interface";

export async function getObjectsIsLike(
  re_object__uuid: string,
): Promise<ObjectsIsLikeInterface[]> {
  try {
    // Создаем объект URLSearchParams и добавляем параметры запроса
    const params = new URLSearchParams();

    re_object__uuid && params.append('re_object__uuid', re_object__uuid);

    const url = `${PATH_API.objects.isLike}?${params.toString()}`;

    const res = await fetch(url, {
      method: 'GET',
      headers: new Headers({
        'content-type': 'application/json'
      }),
      next: {
        revalidate: 900
      }
    });

    if (!res.ok) { // Обработка случаев, когда запрос вернулся неуспешным статусом
      throw new Error(`Error fetching data in getObjectsIsLike. Status: ${res.status}`);
    }
    return res.json();
  } catch (error) { // Обработка других ошибок
    console.error('Error in getObjectsIsLike:', error);
    throw error;
  }
}
