import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { RealEstateObjectInterface } from '~interfaces/objects.interface';
import { VillageObjectInterface } from '~interfaces/villages.interface';

export interface YoutubeTooltipElementInterface extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  data: RealEstateObjectInterface | VillageObjectInterface;
}
