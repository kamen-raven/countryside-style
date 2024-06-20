import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { RealEstateObjectInterface } from '~interfaces/objects.interface';

export interface SearchResultsPageInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  searchTerm: string;
  searchData:  RealEstateObjectInterface[];
}
