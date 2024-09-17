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



export interface storiesCardsInterface {
  _id: number;
  title: string;
  images: ImageStories[];
}



interface ImageStories {
  _id: number;
  img: StaticImageData;
  alt: string;
}
