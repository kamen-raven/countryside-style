import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { Character } from '../../../api/temp/interfaces';

export interface CatalogCardComponentInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  item: Character;
  children?: ReactNode;
}
