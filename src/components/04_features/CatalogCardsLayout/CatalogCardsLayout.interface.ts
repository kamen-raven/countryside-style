import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { CharacterResponse } from '../../../api/temp/interfaces';

export interface CatalogCardsLayoutInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data:  CharacterResponse;
  itemsPerPage: number;
  children?: ReactNode;
}
