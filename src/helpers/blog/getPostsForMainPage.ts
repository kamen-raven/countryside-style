import { BlogInterface } from "~interfaces/blog.interface";

// функция фильтрации технического тэга для убирания его при отображении тэгов постов
function getPostsForMainPage(dataArray: BlogInterface[]) {
  return dataArray.filter(
    (post) =>
      post.tags !== null && post.tags.some((tag) => tag.tag.name === "@mainPage")
  );
}

export default getPostsForMainPage;
