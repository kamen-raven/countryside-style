
// stores/searchStore.ts
import { create } from 'zustand';
import { getObjects } from '~api/Objects/getObjects';
import sortedObjectsByPrice from '~helpers/objects/sortedObjectsByPrice';
import { RealEstateObjectInterface } from '~interfaces/objects.interface';


interface SearchObjectsStateInterface {
  searchTerm: string;
  searchPriceMin: number;
  searchPriceMax: number;
  searchTypes:("flats" | "lands" | "houses-and-cottages" | "all")[];// 'all' | 'flats' | 'lands' | 'houses-and-cottages';
  searchTypeLabels: string[];
  dataForSearch: RealEstateObjectInterface[];
  initialData: RealEstateObjectInterface[];
  actions: {
    setSearchTerm: (term: string) => void;
    setSearchPriceMin: (price: number) => void;
    setSearchPriceMax: (price: number) => void;
    setSearchTypes: (type:  ("flats" | "lands" | "houses-and-cottages" | "all")[]) => void; // 'all' | 'flats' | 'lands' | 'houses-and-cottages') => void;
    setSearchTypeLabels: (label: string[]) => void;
    setDataForSearch: (data:  RealEstateObjectInterface[]) => void;
    setInitialDataForSearch: (data:  RealEstateObjectInterface[]) => void;
    fetchDataForSearch: () => Promise<void>;
  }
}

export const useSearchObjectsStore = create<SearchObjectsStateInterface>((set) => ({
  searchTerm: '',

  searchPriceMin: NaN,
  searchPriceMax: NaN,

  searchTypes: ['all'],
  searchTypeLabels: [],

  dataForSearch: [],
  initialData: [],

  actions: {
    setSearchTerm: (term) => set({ searchTerm: term }),

    setSearchPriceMin: (price) => set({ searchPriceMin: price }),
    setSearchPriceMax: (price) => set({ searchPriceMax: price }),

    setSearchTypes: (types) => set({ searchTypes: types }),
    setSearchTypeLabels: (labels) => set({searchTypeLabels: labels}),

    setDataForSearch: (data) => set({ dataForSearch: data }),
    setInitialDataForSearch: (data) => set({ initialData: data }),


    fetchDataForSearch: async () => {
      try {
        const data = await getObjects();

        const filteredData = data.filter((item: RealEstateObjectInterface) =>
          item.display_pages.some(
            (page) => page.display_pages.value !== 'Архив'
          ));

          sortedObjectsByPrice(filteredData);

          //console.log(`fetchDataForSearch ${filteredData}`); //*

        set({ dataForSearch: filteredData, initialData: filteredData });
      }
      catch (error) {
        console.error('Failed to fetch data:', error);
        // Сбрасываем данные в случае ошибки
        set({ dataForSearch: [], initialData: [] });
      }
    }
  }
}));
