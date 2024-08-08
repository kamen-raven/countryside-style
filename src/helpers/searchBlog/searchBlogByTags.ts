import { BlogInterface } from "~interfaces/blog.interface";

function searchBlogByTags(data: BlogInterface[], tags: string[]) {
  if (tags.length === 0) {
    return data;
  }

  const filteredData = data.filter((post) => {
    return post.tags && post.tags.some((t) => tags.includes(t.tag.name));
  });

  return filteredData;
}

export default searchBlogByTags;
