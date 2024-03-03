import { BlogInterface } from "~interfaces/blog.interface";

function gettingUniqueTagName (dataArray: BlogInterface[]) {
// Создаем пустой массив для хранения уникальных значений
const uniqueTagNames: string[] = [];

// Перебираем все результаты
dataArray.forEach((post) => {
  // Перебираем все теги в текущем результате
  post.tags && post.tags.forEach(item => {
    // Получаем имя тега и проверяем, есть ли оно уже в списке уникальных имен
    const tagName = item.tag.name;
    if (!uniqueTagNames.includes(tagName)) {
      // Если имени тега нет в списке, добавляем его
      uniqueTagNames.push(tagName);
    }
  });
});

return uniqueTagNames;
}

export default gettingUniqueTagName;
