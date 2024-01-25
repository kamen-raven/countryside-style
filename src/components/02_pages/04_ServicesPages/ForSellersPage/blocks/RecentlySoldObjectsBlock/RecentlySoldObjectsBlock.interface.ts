import { DetailedHTMLProps, HTMLAttributes } from "react";
import { objectItemInterface } from "~data/temp/objectsTemplateList/objectItem.interface";

export interface RecentlySoldObjectsBlockInterface
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  recentObjectsData: objectItemInterface[];
}
