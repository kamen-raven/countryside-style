import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { storiesCardsInterface } from '~data/constant/servicesBlock/servicesCards/servicesCards.interface';

export interface StoriesCardElementInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  servicesCard: storiesCardsInterface;
}
