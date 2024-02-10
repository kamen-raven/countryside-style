import { StaticImageData } from 'next/image';

export interface villagesProjectsDataInterface {
  _id: number;
  name: string;
  description: string;
  image: StaticImageData;
  logo: string;
  link: {
      url: string;
      buttonText: string;
  };
}
