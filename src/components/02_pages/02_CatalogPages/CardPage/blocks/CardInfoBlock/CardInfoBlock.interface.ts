import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { RealEstateObjectInterface } from '~interfaces/objects.interface';

export interface CardInfoBlockInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  typePage: 'flats' | 'lands' | 'houses-and-cottages' | 'cottages';
  objectData: RealEstateObjectInterface;
}
