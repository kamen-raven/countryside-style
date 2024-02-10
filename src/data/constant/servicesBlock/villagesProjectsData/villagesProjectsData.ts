import { villagesProjectsDataInterface } from "./villagesProjectsData.interface";

// Photos
import AquadolceImg from "~img/villagesProjects/aquadolce.jpg";
import pavlovskKvartalImg from "~img/villagesProjects/pavlovskKvartal.jpg";


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
    description: "Наше агентство эксклюзивный продавец поселка. Провели работу от разработки концепции поселка, нейминга и создания сайта до продаж все участков.",
    image: pavlovskKvartalImg,
    logo: '',
    link: {
      url: 'https://pavlovsk-kvartal.ru',
      buttonText: 'www.pavlovsk-kvartal.ru'
    },
  },
];

export default villagesProjectsData;
