'use client';


//import { useRouter } from 'next/navigation';
import React from 'react';
import searchObjectsByCategory from '~helpers/searchObjects/searchObjectsByCategory';
import searchObjectsByMaxPrice from '~helpers/searchObjects/searchObjectsByMaxPrice';
import searchObjectsByMinPrice from '~helpers/searchObjects/searchObjectsByMinPrice';
import searchObjectsByName from '~helpers/searchObjects/searchObjectsByName';
import { RealEstateObjectInterface } from '~interfaces/objects.interface';
import { SearchResultsPage } from '~pages/index';
import { useSearchStore } from '~store/searchStore/useSearchStore';

export default function SearchResults() {
 // const router = useRouter();

  // объект состояний
  const searchStore = {
    searchTerm: useSearchStore((state) => state.searchTerm),
    searchPriceMin: useSearchStore((state) => state.searchPriceMin),
    searchPriceMax: useSearchStore((state) => state.searchPriceMax),
    searchTypes: useSearchStore((state) => state.searchTypes),
    searchTypeLabels: useSearchStore((state) => state.searchTypeLabels),
    dataForSearch: useSearchStore((state) => state.dataForSearch),
    initialData: useSearchStore((state) => state.initialData),
  };
  /*     searchTerm: useSearchStore.getState().searchTerm,
      searchPriceMin: useSearchStore.getState().searchPriceMin,
      searchPriceMax: useSearchStore.getState().searchPriceMax,
      searchType: useSearchStore.getState().searchType,
      searchTypeLabel: useSearchStore.getState().searchTypeLabel,
      dataForSearch: useSearchStore.getState().dataForSearch,
      initialData: useSearchStore.getState().initialData, */






/*     if (searchStore.initialData.length < 1) {
      router.back();
    } */


  const filterData = (
    data: RealEstateObjectInterface[],
    term: string,
    types: ('all' | 'flats' | 'lands' | 'houses-and-cottages')[],
    priceMin: number,
    priceMax: number
  ) => {
    let filteredData = data;

    if (term) {
      filteredData = searchObjectsByName(filteredData, term);
    }

    if (types.length > 0) {
      filteredData = searchObjectsByCategory(filteredData, types);
    }

    if (!Number.isNaN(priceMin) && priceMin > 0) {
      filteredData = searchObjectsByMinPrice(filteredData, priceMin);
    }

    if (!Number.isNaN(priceMax) && priceMax > 0) {
      filteredData = searchObjectsByMaxPrice(filteredData, priceMax);
    }

    return filteredData;
  };



  const filteredData = filterData(
    searchStore.dataForSearch,
    searchStore.searchTerm,
    searchStore.searchTypes,
    searchStore.searchPriceMin,
    searchStore.searchPriceMax,
  );




  console.log(`Type: ${searchStore.searchTypes}`);

/*   console.log(`dataSearch: ${searchStore.dataForSearch.length}`);
  console.log(`filteredData: ${filteredData.length}`);
  console.log(`Term: ${searchStore.searchTerm}`);
  console.log(`min: ${searchStore.searchPriceMin}`);
  console.log(`max: ${searchStore.searchPriceMax}`); */

  return (
    <SearchResultsPage
      searchStore={searchStore}
      /*       searchTerm={searchTerm}
            searchType={searchType} */
      filteredData={filteredData}
    />
  );
}
