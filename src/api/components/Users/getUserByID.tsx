import { PATH_API } from "../../utils/path-api";
import { UsersInterface } from "~interfaces/users.interface";

export async function getUserByID(uuid: string): Promise<UsersInterface> {
  try {
    // Формируем URL с параметрами
    const url = PATH_API.users.byID + uuid;

    const res = await fetch(url, {
      method: 'GET',
      headers: new Headers({
        'content-type': 'application/json'
      }),
      next: {
        revalidate: 60// 86400 // 1 сутки
      }
    });

    if (!res.ok) { // Обработка случаев, когда запрос вернулся неуспешным статусом
      throw new Error(`Error fetching data in getUserByID. Status: ${res.status}`);
    }
    return res.json();
  } catch (error) { // Обработка других ошибок
    console.error('Error in getUserByID:', error);
    throw error;
  }
}
