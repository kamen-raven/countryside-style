import CudNewsLogo from "~img/PressBlock/CudNews.png";
import KommersantLogo from "~img/PressBlock/Commersant.png";
import PromdevelopLogo from "~img/PressBlock/Promdevelop.png";
import { StaticImageData } from "next/image";


export interface pressDataInterface {
  _id: number;
  journal: string;
  article: string;
  link:string;
  logo: StaticImageData;
}

const pressData: pressDataInterface[] = [
  {
    _id: 1,
    journal: 'CudNews',
    article: 'Какие квартиры невозможно продать без дисконта?',
    link: 'https://cud.news/72686/',
    logo: CudNewsLogo,
  },
  {
    _id: 2,
    journal: 'Kommersant',
    article: 'Обратная ипотека ',
    link: 'https://www.kommersant.ru/doc/5899850',
    logo: KommersantLogo,
  },
  {
    _id: 3,
    journal: 'Promdevelop',
    article: 'Оспаривание кадастровой стоимости земельного участка, объекта недвижимости',
    link: 'https://pakhotin.org/business/osparivanie-kadastrovoj-stoimosti/',
    logo: PromdevelopLogo,
  },
];

export default pressData;


/*
interface PressLogoItem {
  logo: StaticImageData;
  name: string;
}

export interface PressLogos {
  CudNews: PressLogoItem;
  Kommersant: PressLogoItem;
  Promdevelop: PressLogoItem;
}

export const pressLogos = [
  {
    logo: CudNewsLogo,
    name: "CudNews",
  },
  {
    logo: KommersantLogo,
    name: "Kommersant",
  },
  {
    logo: PromdevelopLogo,
    name: "Promdevelop",
  },
];

 */




