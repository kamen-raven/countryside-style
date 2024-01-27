import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { titleBlockDataInterface } from '~data/constant/servicesBlock/servicesPagesFor/titleBlockData/titleBlockDataInterface';
import { typePageEnum } from '~data/constant/servicesBlock/servicesPagesFor/typePageEnum';

export interface ForCottageVillagesPageInterface   extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  typePage: typePageEnum;
  titleBlockData: titleBlockDataInterface;

}
