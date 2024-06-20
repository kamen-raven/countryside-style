
// stores/searchStore.ts
import { create } from 'zustand';
import { getObjects } from '~api/Objects/getObjects';
import { RealEstateObjectInterface } from '~interfaces/objects.interface';


interface SearchStateInterface {
  searchTerm: string;
  allData: RealEstateObjectInterface[];
  filteredData: RealEstateObjectInterface[];
  actions: {
    setSearchTerm: (term: string) => void;
    setData: (data: RealEstateObjectInterface[]) => void;
    fetchFilteredData: (term: string) => Promise<void>;
  }
}

export const useSearchStore = create<SearchStateInterface>((set) => ({
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
}));
