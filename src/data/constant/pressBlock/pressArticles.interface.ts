import { StaticImageData } from "next/image";

export interface pressDataInterface {
  _id: number;
  journal: string;
  article: string;
  link:string;
  logo: StaticImageData;
}
