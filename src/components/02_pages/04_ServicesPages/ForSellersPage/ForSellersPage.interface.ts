import { DetailedHTMLProps, HTMLAttributes } from "react";
import { typePageEnum } from "~data/constant/servicesBlock/servicesPagesFor/typePageEnum";

import { advantagesItemInterface } from "~data/constant/advantagesList/advantagesItem.interface";
import { titleBlockDataInterface } from "~data/constant/servicesBlock/servicesPagesFor/titleBlockData/titleBlockDataInterface";
import { reviewDataInterface } from "~data/temp/reviewsData/reviewsData.interface";
import { objectItemInterface } from "~data/temp/objectsTemplateList/objectItem.interface";

export interface ForSellersPageInterface
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  typePage: typePageEnum;
  advantagesListData: advantagesItemInterface[];
  titleBlockData: titleBlockDataInterface;
  reviewsData: reviewDataInterface[];
  recentObjectsData: objectItemInterface[];
}
