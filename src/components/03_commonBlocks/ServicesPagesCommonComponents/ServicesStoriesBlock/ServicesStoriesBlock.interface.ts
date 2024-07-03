import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { servicesCardsInterface } from '~data/constant/servicesBlock/servicesCards/servicesCards.interface';

export interface ServicesStoriesBlockInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  servicesCardsData: servicesCardsInterface[];

}
