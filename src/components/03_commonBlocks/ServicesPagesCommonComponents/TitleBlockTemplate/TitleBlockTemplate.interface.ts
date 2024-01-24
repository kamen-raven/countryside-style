import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { titleBlock } from '~data/constant/servicesBlock/servicesPagesFor/titleBlockData/titleBlockDataInterface';

export interface TitleBlockTemplateInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  pageData: titleBlock;
}
