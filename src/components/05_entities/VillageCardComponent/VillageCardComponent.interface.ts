import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { VillageObjectInterface } from '~interfaces/villages.interface';

export interface VillageCardComponentInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  item: VillageObjectInterface;
  typePage: string;
}
