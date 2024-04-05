import { PATH_API } from "../../utils/path-api";
import { ApplicationFeedbackInterface } from "~interfaces/applicationsFeedback.interface";


export async function postApplicationFeedback(text: string, applicant: string, contact: string): Promise<ApplicationFeedbackInterface> {
  try {
    // Создаем FormData объект для отправки данных в формате multipart/form-data
    const formData = new FormData();
    formData.append('text', text);
    formData.append('applicant', applicant);
    formData.append('contact', contact);

    const url = `${PATH_API.applicationsFeedback.postApplicationFeedback}`; // Путь к API для создания объектов

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        // Не устанавливаем заголовок Content-Type, т.к. он будет автоматически установлен как multipart/form-data
        /* 'Content-Type': 'multipart/form-data', */
    },
      body: formData,
    });

    if (!res.ok) { // Обработка случаев, когда запрос вернулся неуспешным статусом
      throw new Error(`Error fetching data in postApplicationFeedback. Status: ${res.status}`);
    }

    return res.json(); // Возвращаем JSON ответ
  } catch (error) { // Обработка других ошибок
    console.error('Error in postApplicationFeedback:', error);
    throw error;
  }
}
