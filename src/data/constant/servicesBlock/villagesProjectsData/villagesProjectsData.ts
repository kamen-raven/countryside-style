import { villagesProjectsDataInterface } from "./villagesProjectsData.interface";

// Photos
import AquadolceImg from "~img/villagesProjects/aquadolce.jpg";
import PavlovskKvartalImg from "~img/villagesProjects/pavlovskKvartal.jpg";
import FiveMile from '~img/villagesProjects/fiveMile.jpg';
import Sergievskoe from '~img/villagesProjects/sergievskoe.jpg';
import BigHill from '~img/villagesProjects/bigHill.jpg';


const villagesProjectsData: villagesProjectsDataInterface[]= [
  {
    _id: 1,
    name: "Коттеджный поселок «AquaDolce»",
    description: "Наше агентство эксклюзивный продавец поселка. Ребрендинг поселка и последующая организация продаж.",
    image: AquadolceImg,
    logo: '',
    link: {
      url: 'https://aquadolce.ru',
      buttonText: 'www.aquadolce.ru'
    },
  },
  {
    _id: 2,
    name: "Коттеджный поселок «Павловский квартал»",
    description: "Наше агентство эксклюзивный продавец поселка. Провели работу от разработки концепции поселка, нейминга и создания сайта до продаж всех участков.",
    image: PavlovskKvartalImg,
    logo: '',
    link: {
      url: 'https://pavlovsk-kvartal.ru',
      buttonText: 'www.pavlovsk-kvartal.ru'
    },
  },
  {
    _id: 3,
    name: "Коттеджный поселок «Пятая миля»",
    description: "Наше агентство эксклюзивный продавец поселка. Ребрендинг поселка и последующая организация продаж.",
    image: FiveMile,
    logo: '',
    link: {
      url: '',
      buttonText: ''
    },
  },
  {
    _id: 4,
    name: "Коттеджный поселок «Сергиевское»",
    description: "Наше агентство эксклюзивный продавец поселка.",
    image: Sergievskoe,
    logo: '',
    link: {
      url: '',
      buttonText: ''
    },
  },
  {
    _id: 5,
    name: "Коттеджный поселок «Большие горки»",
    description: "Наше агентство эксклюзивный продавец поселка.",
    image: BigHill,
    logo: '',
    link: {
      url: '',
      buttonText: ''
    },
  },
];

export default villagesProjectsData;
