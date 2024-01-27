import { DetailedHTMLProps, HTMLAttributes } from "react";
import { advantagesItemInterface } from "~data/constant/servicesBlock/advantagesList/advantagesItem.interface";
import { faqDataListInterface } from "~data/constant/faqBlock/faqDataList.interface";
import { titleBlockDataInterface } from "~data/constant/servicesBlock/servicesPagesFor/titleBlockData/titleBlockDataInterface";
import { typePageEnum } from "~data/constant/servicesBlock/servicesPagesFor/typePageEnum";
import { objectItemInterface } from "~data/temp/objectsTemplateList/objectItem.interface";
import { reviewDataInterface } from "~data/temp/reviewsData/reviewsData.interface";

export interface ForBuyersPageInterface
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  typePage: typePageEnum;
  advantagesListData: advantagesItemInterface[];
  titleBlockData: titleBlockDataInterface;
  reviewsData: reviewDataInterface[];
}
