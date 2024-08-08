import { BlogInterface } from "~interfaces/blog.interface";

// функция для формирования списка уникальных тэгов на странице БЛОГА в поиске
function getUniqueTagName (dataArray: BlogInterface[]) {
// Создаем пустой массив для хранения уникальных значений
const uniqueTagNames: string[] = [];

// Перебираем все результаты
dataArray.forEach((post) => {
  // Перебираем все теги в текущем результате
  post.tags && post.tags.forEach(item => {
    // Получаем имя тега и проверяем, есть ли оно уже в списке уникальных имен
    const tagName = item.tag.name;
    // убираем технический тэг главной страницы "@mainPage" и пустой тэг
    if (tagName !== "@mainPage" && tagName !== "" && !uniqueTagNames.includes(tagName)) {
      // Если имени тега нет в списке, добавляем его
      uniqueTagNames.push(tagName);
    }
  });
});

return uniqueTagNames;
}

export default getUniqueTagName;
