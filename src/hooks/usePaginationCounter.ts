'use client';

import { useState } from "react";

interface PaginationResult<T> {
  totalPages: number;
  currentItems: T[];
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}


const usePaginationCounter = <T>(array: T[], itemsPerPage: number): PaginationResult<T> => {
  const perPage = array.length;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(perPage / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = array.slice(startIndex, endIndex);

  return {
    totalPages,
    currentItems,
    currentPage,
    setCurrentPage
  };
};

export default usePaginationCounter;
