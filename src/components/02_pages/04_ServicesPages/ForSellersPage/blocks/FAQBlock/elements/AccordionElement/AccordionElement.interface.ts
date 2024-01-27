import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { faqDataListInterface } from '~data/constant/faqBlock/faqDataList.interface';

export interface AccordionElementInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  faqItem: faqDataListInterface
}
