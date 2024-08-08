import { DetailedHTMLProps, HTMLAttributes } from "react";
import { advantagesItemInterface } from "~data/constant/servicesBlock/advantagesList/advantagesItem.interface";
import { servicesCardsInterface } from "~data/constant/servicesBlock/servicesCards/servicesCards.interface";
import { titleBlockDataInterface } from "~data/constant/servicesBlock/servicesPagesFor/titleBlockData/titleBlockDataInterface";
import { typePageEnum } from "~data/constant/servicesBlock/servicesPagesFor/typePageEnum";
import { ReviewInterface } from "~interfaces/review.interface";

export interface ForBuyersPageInterface
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  typePage: typePageEnum;
  advantagesListData: advantagesItemInterface[];
  titleBlockData: titleBlockDataInterface;
  reviewsData: ReviewInterface[];
  servicesCardsData: servicesCardsInterface[];
}
