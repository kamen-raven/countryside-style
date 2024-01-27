import { DetailedHTMLProps, HTMLAttributes } from "react";
import { advantagesItemInterface } from "~data/constant/servicesBlock/advantagesList/advantagesItem.interface";
import { titleBlockDataInterface } from "~data/constant/servicesBlock/servicesPagesFor/titleBlockData/titleBlockDataInterface";
import { typePageEnum } from "~data/constant/servicesBlock/servicesPagesFor/typePageEnum";
import { reviewDataInterface } from "~data/temp/reviewsData/reviewsData.interface";

export interface LegalSupportPageInterface
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  typePage: typePageEnum;
  advantagesListData: advantagesItemInterface[];
  titleBlockData: titleBlockDataInterface;
  reviewsData: reviewDataInterface[];
}
