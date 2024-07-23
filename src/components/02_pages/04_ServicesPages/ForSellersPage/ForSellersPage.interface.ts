import { DetailedHTMLProps, HTMLAttributes } from "react";
import { typePageEnum } from "~data/constant/servicesBlock/servicesPagesFor/typePageEnum";

import { advantagesItemInterface } from "~data/constant/servicesBlock/advantagesList/advantagesItem.interface";
import { titleBlockDataInterface } from "~data/constant/servicesBlock/servicesPagesFor/titleBlockData/titleBlockDataInterface";
import { faqDataListInterface } from "~data/constant/faqBlock/faqDataList.interface";
import { ReviewInterface } from "~interfaces/review.interface";
import { servicesCardsInterface } from "~data/constant/servicesBlock/servicesCards/servicesCards.interface";
import { RealEstateObjectInterface } from "~interfaces/objects.interface";

export interface ForSellersPageInterface
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  typePage: typePageEnum;
  advantagesListData: advantagesItemInterface[];
  titleBlockData: titleBlockDataInterface;
  reviewsData: ReviewInterface[]; 
  archiveObjectsData: RealEstateObjectInterface[]
  faqData: faqDataListInterface[];
  servicesCardsData: servicesCardsInterface[];
}
