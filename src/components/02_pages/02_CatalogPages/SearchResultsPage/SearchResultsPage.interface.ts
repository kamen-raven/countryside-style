import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { RealEstateObjectInterface } from '~interfaces/objects.interface';

export interface SearchResultsPageInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
/*   searchTerm: string;
  searchType: 'all' | 'flats' | 'lands' | 'houses-and-cottages'; */
  searchStore: {
    searchTerm: string;
/*     searchPriceMin: number;
    searchPriceMax: number; */
    searchType: "all" | "flats" | "lands" | "houses-and-cottages";
    searchTypeLabel: string;
    dataForSearch: RealEstateObjectInterface[];
    initialData: RealEstateObjectInterface[];
};
filteredData:  RealEstateObjectInterface[];
}
