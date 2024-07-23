import { DetailedHTMLProps, HTMLAttributes } from "react";
import { RealEstateObjectInterface } from "~interfaces/objects.interface";

export interface RecentlySoldObjectsBlockInterface
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    archiveObjectsData: RealEstateObjectInterface[];
}
