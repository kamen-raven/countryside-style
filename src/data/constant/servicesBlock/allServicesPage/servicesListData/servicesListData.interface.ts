import { StaticImageData } from "next/image";

export interface servicesDataInterface {
  _id: number;
  title: string;
  description: string;
  link: string;
  image: StaticImageData;
}
