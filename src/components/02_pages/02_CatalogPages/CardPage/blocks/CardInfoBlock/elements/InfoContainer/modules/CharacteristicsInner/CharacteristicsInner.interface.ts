import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { RealEstateObjectInterface } from '~interfaces/objects.interface';

export interface CharacteristicsInnerInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement > {
  data: RealEstateObjectInterface;
  typePage: 'flats' | 'lands' | 'houses-and-cottages' | 'cottages' | undefined;
}
