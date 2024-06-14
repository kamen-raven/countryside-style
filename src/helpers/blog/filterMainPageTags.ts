import { TagInterface } from "~interfaces/blog.interface";


// функция фильтрации технического тэга для убирания его при отображении тэгов постов
function filterMainPageTags(dataArray: TagInterface[] | null) {
  if (!dataArray) {
    return '';
  }

  const resultTagsArray = dataArray.filter(
    (tag) => tag.tag.name !== "@mainPage"
  );

  return resultTagsArray;
}

export default filterMainPageTags;
