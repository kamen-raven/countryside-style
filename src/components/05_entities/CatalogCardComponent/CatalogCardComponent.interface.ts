import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { RealEstateObjectInterface } from '~interfaces/objects.interface';

export interface CatalogCardComponentInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  item: RealEstateObjectInterface;
  index: number;
  place?: 'moreObj' | 'catalogPage'
/*   typePage: "flats" | "lands" | "houses-and-cottages" | "villages"; */
}
