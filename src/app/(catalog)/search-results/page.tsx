'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import searchObjectsByCategory from '~helpers/searchObjects/searchObjectsByCategory';
import searchObjectsByName from '~helpers/searchObjects/searchObjectsByName';
import { RealEstateObjectInterface } from '~interfaces/objects.interface';
import { SearchResultsPage } from '~pages/index';
import { useSearchStore } from '~store/searchStore/useSearchStore';

export default function SearchResults() {
  const router = useRouter();
  const searchTerm = useSearchStore((state) => state.searchTerm);
  const searchType = useSearchStore((state) => state.searchType);
  const searchData = useSearchStore((state) => state.dataForSearch);

  if (searchData.length < 1 && searchTerm === '') {
    router.back();
  }

  const useFiltersForData = (
    data: RealEstateObjectInterface[],
    term: string,
    type: "all" | "flats" | "lands" | "houses-and-cottages") => {
      let filteredData;
      filteredData = searchObjectsByName(data, term);

    if (type !== 'all') {
      return filteredData = searchObjectsByCategory(filteredData, type);
    }
    return filteredData;
  };




  const filteredData = useFiltersForData(searchData, searchTerm, searchType);
  console.log(filteredData);


  return (
    <SearchResultsPage
      searchTerm={searchTerm}
      searchType={searchType}
      searchData={filteredData}
    />
  );
}
