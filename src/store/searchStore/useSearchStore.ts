
// stores/searchStore.ts
import { create } from 'zustand';
import { getObjects } from '~api/Objects/getObjects';
import { RealEstateObjectInterface } from '~interfaces/objects.interface';


interface SearchStateInterface {
  searchTerm: string;
  searchPrice: number;
  searchType: 'all' | 'flats' | 'lands' | 'houses-and-cottages';
  searchTypeLabel: string;
  dataForSearch: RealEstateObjectInterface[];
  actions: {
    setSearchTerm: (term: string) => void;
    setSearchPrice: (price: number) => void;
    setSearchType: (type: 'all' | 'flats' | 'lands' | 'houses-and-cottages') => void;
    setSearchTypeLabel: (label: string) => void;

    fetchDataForSearch: () => Promise<void>;
  }
}

export const useSearchStore = create<SearchStateInterface>((set) => ({
  searchTerm: '',
  searchPrice: 0,
  searchType: 'all',
  searchTypeLabel: '',

  dataForSearch: [],

  actions: {
    setSearchTerm: (term) => set({ searchTerm: term }),
    setSearchPrice: (price) => set({ searchPrice: price }),
    setSearchType: (type) => set({ searchType: type }),
    setSearchTypeLabel: (label) => set({searchTypeLabel: label}),

    fetchDataForSearch: async () => {
      try {
        const data = await getObjects();

        const filteredData = data.filter((item: RealEstateObjectInterface) =>
          item.display_pages.some(
            (page) => page.display_pages.value !== 'Архив'
          ));

          console.log(filteredData); //*

        set({ dataForSearch: filteredData });
      }
      catch (error) {
        console.error('Failed to fetch data:', error);
        // Сбрасываем данные в случае ошибки
        set({ dataForSearch: [] });
      }
    }
  }
}));


/* export const useSearchStore = create<SearchStateInterface>((set) => ({
  searchTerm: '',
  allData: [],
  filteredData: [],
  actions: {

    setSearchTerm: (term) => set({ searchTerm: term }),
    setData: (data) => set({ filteredData: data }),

    fetchFilteredData: async (term) => {
      try {
        const data = await getObjects();
        set({ allData: data }); // все данные объектов

        const filteredData = data.filter((item: RealEstateObjectInterface) =>
          item.name.toLowerCase().includes(term.toLowerCase())
        );
        set({ filteredData: filteredData });
      }
      catch (error) {
        console.error('Failed to fetch data:', error);
        // Сбрасываем данные в случае ошибки
        set({ allData: [] });
        set({ filteredData: [] });
      }
    }
  }
})); */
