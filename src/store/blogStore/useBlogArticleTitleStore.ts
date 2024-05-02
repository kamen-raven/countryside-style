import { create } from "zustand";

interface BlogArticleTitleState {
  blogArticleTitle: string;
  currentTitle: {
    setBlogArticleTitle: (title: string) => void;
  };
}

const useBlogArticleTitleStore = create<BlogArticleTitleState>((set) => ({
  blogArticleTitle: '',

  currentTitle: {
    setBlogArticleTitle: (title: string) => {
      set({
        blogArticleTitle: title
      });
    },
  },
}));

export default useBlogArticleTitleStore;
