'use client';


import React from 'react';
import searchObjectsByCategory from '~helpers/searchObjects/searchObjectsByCategory';
import searchObjectsByName from '~helpers/searchObjects/searchObjectsByName';
import { RealEstateObjectInterface } from '~interfaces/objects.interface';
import { SearchResultsPage } from '~pages/index';
import { useSearchStore } from '~store/searchStore/useSearchStore';

export default function SearchResults() {
  //const router = useRouter();

  // объект состояний
  const searchStore = {
    searchTerm: useSearchStore((state) => state.searchTerm),
/*     searchPriceMin: useSearchStore((state) => state.searchPriceMin),
    searchPriceMax: useSearchStore((state) => state.searchPriceMax), */
    searchType: useSearchStore((state) => state.searchType),
    searchTypeLabel: useSearchStore((state) => state.searchTypeLabel),
    dataForSearch: useSearchStore((state) => state.dataForSearch),
    initialData: useSearchStore((state) => state.initialData),
  };


  /*   if (searchData.length < 1 && searchTerm === '') {
      router.back();
    } */

  const useFiltersForData = (
    data: RealEstateObjectInterface[],
    term: string
  ) => {
    const filteredData = searchObjectsByName(data, term);
    return filteredData;
  };


  const filterData = (
    data: RealEstateObjectInterface[],
    term: string,
    type: 'all' | 'flats' | 'lands' | 'houses-and-cottages'
  ) => {
    let filteredData = data;

    if (term) {
      filteredData = searchObjectsByName(filteredData, term);
    }

    if (type !== 'all') {
      filteredData = searchObjectsByCategory(filteredData, type);
    }

    return filteredData;
  };





  const filteredData = filterData(searchStore.dataForSearch, searchStore.searchTerm, searchStore.searchType);










  console.log(`dataSearch: ${searchStore.dataForSearch.length}`);
  console.log(`filteredData: ${filteredData.length}`);
  console.log(`Term: ${searchStore.searchTerm}`);
  console.log(`Type: ${searchStore.searchType}`);

  return (
    <SearchResultsPage
      searchStore={searchStore}
      /*       searchTerm={searchTerm}
            searchType={searchType} */
      filteredData={filteredData}
    />
  );
}
