/* import { PATH_API } from "../../utils/path-api";
import { ObjectsIsLikeInterface } from "~interfaces/objects.interface";

export async function getVillagesIsLike(
  re_object__uuid: string,
): Promise<ObjectsIsLikeInterface[] | null> {
  try {
    // Формируем URL с параметрами
    const url = PATH_API.objects.objectsIsLike + re_object__uuid;

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
      throw new Error(`Error fetching data in getVillagesIsLike. Status: ${res.status}`);
    }
    return res.json();
  } catch (error) { // Обработка других ошибок
    console.error('Error in getVillagesIsLike:', error);
    throw error;
  }
}
 */
