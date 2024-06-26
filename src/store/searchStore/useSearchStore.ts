
// stores/searchStore.ts
import { create } from 'zustand';
import { getObjects } from '~api/Objects/getObjects';
import sortedObjectsByPrice from '~helpers/objects/sortedObjectsByPrice';
import { RealEstateObjectInterface } from '~interfaces/objects.interface';


interface SearchStateInterface {
  searchTerm: string;
  searchPriceMin: number;
  searchPriceMax: number;
  searchType: 'all' | 'flats' | 'lands' | 'houses-and-cottages';
  searchTypeLabel: string;
  dataForSearch: RealEstateObjectInterface[];
  initialData: RealEstateObjectInterface[];
  actions: {
    setSearchTerm: (term: string) => void;
    setSearchPriceMin: (price: number) => void;
    setSearchPriceMax: (price: number) => void;
    setSearchType: (type: 'all' | 'flats' | 'lands' | 'houses-and-cottages') => void;
    setSearchTypeLabel: (label: string) => void;
    setDataForSearch: (data:  RealEstateObjectInterface[]) => void
    fetchDataForSearch: () => Promise<void>;
  }
}

export const useSearchStore = create<SearchStateInterface>((set) => ({
  searchTerm: '',

  searchPriceMin: 0,
  searchPriceMax: 0,

  searchType: 'all',
  searchTypeLabel: '',

  dataForSearch: [],
  initialData: [],

  actions: {
    setSearchTerm: (term) => set({ searchTerm: term }),

    setSearchPriceMin: (price) => set({ searchPriceMin: price }),
    setSearchPriceMax: (price) => set({ searchPriceMax: price }),

    setSearchType: (type) => set({ searchType: type }),
    setSearchTypeLabel: (label) => set({searchTypeLabel: label}),

    setDataForSearch: (data) => set({ dataForSearch: data }),


    fetchDataForSearch: async () => {
      try {
        const data = await getObjects();

        const filteredData = data.filter((item: RealEstateObjectInterface) =>
          item.display_pages.some(
            (page) => page.display_pages.value !== 'Архив'
          ));

          sortedObjectsByPrice(filteredData);

          console.log(`fetchDataForSearch ${filteredData}`); //*

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
