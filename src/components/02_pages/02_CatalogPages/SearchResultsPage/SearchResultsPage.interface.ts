import { DetailedHTMLProps, HTMLAttributes } from "react";
import { RealEstateObjectInterface } from "~interfaces/objects.interface";

export interface SearchResultsPageInterface
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  searchStore: {
    searchTerm: string;
    searchPriceMin: number;
    searchPriceMax: number;
    searchTypes: ("all" | "flats" | "lands" | "houses-and-cottages")[];
    searchTypeLabels: string[];
    dataForSearch: RealEstateObjectInterface[];
    initialData: RealEstateObjectInterface[];
  };
  filteredData: RealEstateObjectInterface[];
}
