import { StaticImageData } from 'next/image';
export interface objectItemInterface {
  id: number;
  status: string;
  title: string;
  type: string;
  mainImage: StaticImageData;
  address: {
    area: string;
    town: string;
    organization?: string;
    map: {
      coordinateX?: string;
      coordinateY?: string;
      mapLink?: string;
    };
  };
  cost: number;
  characteristics: {
    distanceToKad?: string;
    house?: {
      squareHouse?: number;
      squareLiving?: number;
      squareKitchen?: number;
      roomCount?: number;
      floorCount?: number;
      rooms?: string;
      material?: string;
      basement?: string;
      communications?: string;
    };
    homestead?: {
      category?: string;
      squareArea?: string;
      relief?: string;
      fence?: string;
    };
  };
  links?: {
    youtube?: string;
  };
  seller: {
    manager: string;
    contact: string;
  };
  information: {
    common: string;
    communications?: string;
    plan?:
      {
      floor: string,
      info: string
      }[];
    advantages?: {
      bullet?: string[];
      additional?: string[];
    };
  };
}


