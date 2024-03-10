import { PATH_API } from "../../utils/path-api";
import { VillageObjectInterface } from "~interfaces/villages.interface";

export async function getVillages(): Promise<VillageObjectInterface[]> {
  try {
    // Формируем URL с параметрами
    const url = PATH_API.villages.allVillages;

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
      throw new Error(`Error fetching data in getObjects. Status: ${res.status}`);
    }
    return res.json();
  } catch (error) { // Обработка других ошибок
    console.error('Error in getObjects:', error);
    throw error;
  }
}
