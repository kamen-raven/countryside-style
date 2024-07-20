import { BlogInterface } from "~interfaces/blog.interface";

function searchBlogByKey(data: BlogInterface[], term: string) {
  // в этой функции мы берем все актуальные объекты
  // и делаем поиск по совпадению в названии / в адресе / в категории объекта
  const filteredData = data.filter(
    (item: BlogInterface) =>
      (item.name && item.name.toLowerCase().includes(term.toLowerCase()))
  );

  return filteredData;
}

export default searchBlogByKey;
