import { create } from "zustand";
import { getBlogArticle } from "~api/Blog/getBlogArticle";
import gettingUniqueTagName from "~helpers/gettingUniqueTagName";
import { TagInterface } from "~interfaces/blog.interface";
import { ReviewInterface } from "~interfaces/review.interface";

interface BlogTagsState {
  tagList: string[];
  get: {
    allTags: (data: TagInterface) => void;
  };
}

const useBlogTagsStore = create<BlogTagsState>((set) => ({
  tagList: [],
  get: {
    allTags: async () => {
      const allPosts = await getBlogArticle(100);
      const uniqueTags = gettingUniqueTagName(allPosts.results);  // создаем массив уникальных тэгов

      set({tagList: uniqueTags});
    }
  }
}));

export default useBlogTagsStore;
