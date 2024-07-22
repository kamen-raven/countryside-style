// stores/searchStore.ts
import { create } from "zustand";

import { BlogInterface } from "~interfaces/blog.interface";

interface SearchBlogStateInterface {
  searchBlogKey: string;
  searchBlogTags: string[];
  dataForBlogSearch: BlogInterface[];
  initialBlogData: BlogInterface[];
  actions: {
    setSearchBlogKey: (key: string) => void;
    addSearchBlogTag: (tag: string) => void;
    removeSearchBlogTag: (tag: string) => void;
    setDataForBlogSearch: (data: BlogInterface[]) => void;
    setInitialBlogData: (data: BlogInterface[]) => void;

    resetSearchBlogStore: () => void;
/*     fetchDataForBlogSearch: () => Promise<void>; */
  };
}

export const useSearchBlogStore = create<SearchBlogStateInterface>((set, get) => ({
  searchBlogKey: "",
  searchBlogTags: [],
  dataForBlogSearch: [],
  initialBlogData: [],

  actions: {
    setSearchBlogKey: (key) => set({ searchBlogKey: key }),
    addSearchBlogTag: (tag) => {
      const currentTags = get().searchBlogTags;
      set({ searchBlogTags: [...currentTags, tag] });
    },
    removeSearchBlogTag: (tag) => {
      const currentTags = get().searchBlogTags;
      set({ searchBlogTags: currentTags.filter((t) => t !== tag) });
    },
    setDataForBlogSearch: (data) => set({ dataForBlogSearch: data }),
    setInitialBlogData: (data) => set({ initialBlogData: data }),
    resetSearchBlogStore: () => set ({
      searchBlogKey: "",
      searchBlogTags: [],
    })
  },
}));
