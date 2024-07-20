// stores/searchStore.ts
import { create } from "zustand";
import { getBlogArticle } from "~api/Blog/getBlogArticle";
import { BlogInterface } from "~interfaces/blog.interface";

interface SearchBlogStateInterface {
  searchBlogKey: string;
  searchBlogTag: string[];
  dataForBlogSearch: BlogInterface[];
  initialBlogData: BlogInterface[];
  actions: {
    setSearchBlogKey: (key: string) => void;
    setSearchBlogTag: (tags: string[]) => void;
    setDataForBlogSearch: (data: BlogInterface[]) => void;
    setInitialBlogData: (data: BlogInterface[]) => void;
    fetchDataForBlogSearch: () => Promise<void>;
  };
}

export const useSearchBlogStore = create<SearchBlogStateInterface>((set) => ({
  searchBlogKey: "",
  searchBlogTag: [""],
  dataForBlogSearch: [],
  initialBlogData: [],

  actions: {
    setSearchBlogKey: (key) => set({ searchBlogKey: key }),
    setSearchBlogTag: (tags) => set({ searchBlogTag: tags }),

    setDataForBlogSearch: (data) => set({ dataForBlogSearch: data }),
    setInitialBlogData: (data) => set({ initialBlogData: data }),

    fetchDataForBlogSearch: async () => {
      try {
        const data = (await getBlogArticle()).results.reverse();

        console.log(`fetchDataForSearch ${data}`); //*

        set({ dataForBlogSearch: data, initialBlogData: data });
      } catch (error) {
        console.error("Failed to fetch data:", error);
        // Сбрасываем данные в случае ошибки
        set({ dataForBlogSearch: [], initialBlogData: [] });
      }
    },
  },
}));
