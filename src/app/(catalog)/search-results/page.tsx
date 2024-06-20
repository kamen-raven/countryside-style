'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { SearchResultsPage } from '~pages/index';
import { useSearchStore } from '~store/searchStore/useSearchStore';

export default function SearchResults() {
  const router = useRouter();
  const searchTerm = useSearchStore((state) => state.searchTerm);
  const searchData = useSearchStore((state) => state.filteredData);

  if(searchData.length <1 && searchTerm === '') {
    router.back();
  }

  return (
    <SearchResultsPage searchTerm={searchTerm} searchData={searchData} />
  );
}
