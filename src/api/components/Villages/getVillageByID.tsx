import { PATH_API } from "../../utils/path-api";
import { VillageObjectInterface } from "~interfaces/villages.interface";

export async function getVillageByID(
  uuid: string,
  ): Promise<VillageObjectInterface | null> {
  try {
    // Формируем URL с параметрами
    const url = PATH_API.villages.byID + uuid;

    const res = await fetch(url, {
      method: 'GET',
      headers: new Headers({
        'content-type': 'application/json'
      }),
      next: {
        revalidate: 60 // 1 min 3600 // 1 час
      }
    });

    if (!res.ok) { // Обработка случаев, когда запрос вернулся неуспешным статусом
      throw new Error(`Error fetching data in getVillageByID. Status: ${res.status}`);
    }
    return res.json();
  } catch (error) { // Обработка других ошибок
    console.error('Error in getVillageByID:', error);
    throw error;
  }
}
