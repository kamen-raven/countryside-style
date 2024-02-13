import { DetailedHTMLProps, HTMLAttributes } from "react";
import { typePageEnum } from "~data/constant/servicesBlock/servicesPagesFor/typePageEnum";

import { advantagesItemInterface } from "~data/constant/servicesBlock/advantagesList/advantagesItem.interface";
import { titleBlockDataInterface } from "~data/constant/servicesBlock/servicesPagesFor/titleBlockData/titleBlockDataInterface";
//import { reviewDataInterface } from "~data/temp/reviewsData/reviewsData.interface";
import { objectItemInterface } from "~data/temp/objectsTemplateList/objectItem.interface";
import { faqDataListInterface } from "~data/constant/faqBlock/faqDataList.interface";
import { ReviewInterface } from "~interfaces/review.interface";

export interface ForSellersPageInterface
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  typePage: typePageEnum;
  advantagesListData: advantagesItemInterface[];
  titleBlockData: titleBlockDataInterface;
  reviewsData: ReviewInterface[]; //reviewDataInterface[];
  recentObjectsData: objectItemInterface[];
  faqData: faqDataListInterface[];
}
