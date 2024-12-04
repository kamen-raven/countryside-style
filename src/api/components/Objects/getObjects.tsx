import { PATH_API } from "../../utils/path-api";
import { RealEstateObjectInterface } from "~interfaces/objects.interface";

export async function getObjects(): Promise<RealEstateObjectInterface[]> {
  try {
    // Формируем URL с параметрами
    const url = PATH_API.objects.allObjects;

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
      throw new Error(`Error fetching data in getObjects. Status: ${res.status}`);
    }
    return res.json();
  } catch (error) { // Обработка других ошибок
    console.error('Error in getObjects:', error);
    throw error;
  }
}

