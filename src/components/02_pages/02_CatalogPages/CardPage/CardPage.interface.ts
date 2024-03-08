import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { RealEstateObjectInterface } from '~interfaces/objects.interface';

export interface CardPageInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement > {
  typePage: 'flats' | 'lands' | 'houses-and-cottages' | 'cottages';
  objectData: RealEstateObjectInterface;
  children?: ReactNode;
}
