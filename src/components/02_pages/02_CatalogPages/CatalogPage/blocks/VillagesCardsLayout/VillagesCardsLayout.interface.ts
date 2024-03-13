import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { VillageObjectInterface } from '~interfaces/villages.interface';

export interface VillagesCardsLayoutInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  villagesData: VillageObjectInterface[];
  typePage: string;
}
