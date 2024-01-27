import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import { faqDataListInterface } from '~data/constant/faqBlock/faqDataList.interface';

export interface FAQBlockInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  faqData: faqDataListInterface[];
  children?: ReactNode;
}
