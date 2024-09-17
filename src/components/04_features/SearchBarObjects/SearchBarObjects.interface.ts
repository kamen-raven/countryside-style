import { DetailedHTMLProps, HTMLAttributes } from "react";
import { RealEstateObjectInterface } from "~interfaces/objects.interface";
/* import { VillageObjectInterface } from '~interfaces/villages.interface'; */

export interface SearchBarObjectsInterface
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  searchStore?: {
    searchTerm: string;
    searchPriceMin: number;
    searchPriceMax: number;
    searchTypes: ("all" | "flats" | "lands" | "houses-and-cottages")[];
    searchTypeLabels: string[];
    dataForSearch: RealEstateObjectInterface[];
    initialData: RealEstateObjectInterface[];
  };
  typePage: "flats" | "lands" | "houses-and-cottages" | "villages" | "search";
  allObjectsData?: RealEstateObjectInterface[];
  /*   villagesData?: VillageObjectInterface[]; */
}
