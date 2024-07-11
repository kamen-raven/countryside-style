import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { RealEstateObjectInterface } from '~interfaces/objects.interface';
/* import { VillageObjectInterface } from '~interfaces/villages.interface';
 */
export interface AddressPrintComponentInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement > {
  objectData: RealEstateObjectInterface;
}
