import { StaticImageData } from "next/image";

export interface servicesCardsInterface {
  _id: number;
  title: string;
  images: Image[];
}



interface Image {
  _id: number;
  img: StaticImageData;
}
