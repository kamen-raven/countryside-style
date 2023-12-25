import { PATH_API } from "./path";
import { CharacterResponse } from "./interfaces";

export async function getCharacter(): Promise<CharacterResponse> {
  try {
    const res = await fetch(PATH_API.character.getAll, {
      method: 'GET',
      headers: new Headers({
        'content-type': 'application/json'
      }),
      next: {
        revalidate: 10
      }
    });

    if (!res.ok) { // Обработка случаев, когда запрос вернулся неуспешным статусом
      throw new Error(`Error fetching data in getCharacter. Status: ${res.status}`);
    }

    return res.json();
  } catch (error) { // Обработка других ошибок
    console.error('Error in getCharacter:', error);
    throw error;
  }
}
