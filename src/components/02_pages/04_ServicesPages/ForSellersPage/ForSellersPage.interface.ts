import { ReactNode, DetailedHTMLProps, HTMLAttributes } from "react";
import { advantagesItemInterface } from "~data/constant/advantagesList/advantagesItem.interface";
import { titleBlockDataInterface } from "~data/constant/servicesBlock/servicesPagesFor/titleBlockData/titleBlockDataInterface";
import { typePageEnum } from "~data/constant/servicesBlock/servicesPagesFor/typePageEnum";
import { reviewDataInterface } from "~data/temp/reviewsData/reviewsData.interface";

export interface ForSellersPageInterface
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  advantagesListData: advantagesItemInterface[];
  titleBlockData: titleBlockDataInterface;
  reviewsData: reviewDataInterface[];
  children?: ReactNode;
  typePage: typePageEnum;
}
