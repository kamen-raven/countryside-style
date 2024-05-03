import CudNewsLogo from "~img/PressBlock/CudNews.png";
import KommersantLogo from "~img/PressBlock/Commersant.png";
import PromdevelopLogo from "~img/PressBlock/Promdevelop.png";
import { pressDataInterface } from "./pressArticles.interface";


const pressData: pressDataInterface[] = [
  {
    _id: 2,
    journal: 'CudNews',
    article: 'Какие квартиры невозможно продать без дисконта?',
    link: 'https://cud.news/72686/',
    logo: CudNewsLogo,
  },
  {
    _id: 3,
    journal: 'Promdevelop',
    article: 'Оспаривание кадастровой стоимости земельного участка, объекта недвижимости',
    link: 'https://pakhotin.org/business/osparivanie-kadastrovoj-stoimosti/',
    logo: PromdevelopLogo,
  },
  {
    _id: 1,
    journal: 'Kommersant',
    article: 'Обратная ипотека ',
    link: 'https://www.kommersant.ru/doc/5899850',
    logo: KommersantLogo,
  },
];

export default pressData;





