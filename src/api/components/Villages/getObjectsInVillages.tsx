import { PATH_API } from "../../utils/path-api";
import { ObjectsInVillagesInterface } from "~interfaces/villages.interface";

export async function getObjectsInVillages(
  village__uuid: string,
): Promise<ObjectsInVillagesInterface[]> {
  try {
    // Создаем объект URLSearchParams и добавляем параметры запроса
    const params = new URLSearchParams();

    village__uuid && params.append('village__uuid', village__uuid);

    const url = `${PATH_API.villages.isLike}?${params.toString()}`;

    const res = await fetch(url, {
      method: 'GET',
      headers: new Headers({
        'content-type': 'application/json'
      }),
      next: {
        revalidate:  300 // 5 min // 3600 // 1 час
      }
    });

    if (!res.ok) { // Обработка случаев, когда запрос вернулся неуспешным статусом
      throw new Error(`Error fetching data in getObjectsInVillages. Status: ${res.status}`);
    }
    return res.json();
  } catch (error) { // Обработка других ошибок
    console.error('Error in getObjectsInVillages:', error);
    throw error;
  }
}

