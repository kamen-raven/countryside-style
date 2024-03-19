import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { RealEstateObjectInterface } from '~interfaces/objects.interface';
import { VillageObjectInterface } from '~interfaces/villages.interface';

export interface TooltipElementInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: RealEstateObjectInterface | VillageObjectInterface;
  type: "plan" | "youtube";
}
