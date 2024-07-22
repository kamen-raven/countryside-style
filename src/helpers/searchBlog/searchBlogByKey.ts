import { BlogInterface } from "~interfaces/blog.interface";

function searchBlogByKey(data: BlogInterface[], term: string) {
  // в этой функции мы берем все актуальные объекты
  // и делаем поиск по совпадению в названии / в адресе / в категории объекта
  const filteredData = data.filter(
    (post: BlogInterface) =>
      (post.name && post.name.toLowerCase().includes(term.toLowerCase())) ||

    // поиск ключевого слова в тэгах
    (post.tags && post.tags.some((t) => term.includes(t.tag.name)))
  );

  return filteredData;
}

export default searchBlogByKey;
