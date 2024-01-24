import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { advantagesItemInterface } from '~data/constant/advantagesList/advantagesItem.interface';

export interface AboutCompanyBlockInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  aboutUsPageFacts: advantagesItemInterface[];
}
