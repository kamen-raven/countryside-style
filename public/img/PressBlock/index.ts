import CudNewsLogo from "~img/PressBlock/CudNews.png";
import KommersantLogo from "~img/PressBlock/Commersant.png";
import PromdevelopLogo from "~img/PressBlock/Promdevelop.png";
import { StaticImageData } from "next/image";

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
