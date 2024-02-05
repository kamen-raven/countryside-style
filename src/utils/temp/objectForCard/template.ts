export interface dataTemplateInterface  {
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


import { StaticImageData } from 'next/image';
import TemplateImage from '~img/template/House_5 1.jpg';


const dataTemplate: dataTemplateInterface = {
  id: 1106057,
  status: 'current',
  title: 'д. Келози',
  type: 'дача',
  mainImage: TemplateImage,
  address: {
    area: 'Ломоносовский р-н',
    town: 'д. Келози',
    organization: 'КП «Сергеевка»',
    map: {
      coordinateX: '',
      coordinateY: '',
      mapLink: 'https://yandex.ru/map-widget/v1/?um=constructor%3A82d4640cfff3946c64d9620d25ce191b0ca06b56eea9ee8a0ad636757cd19e55&amp'
    }
  },
  cost: 7.99,
  characteristics: {
    distanceToKad: '2 км',
    house: {
      squareHouse: 144.2,
      squareLiving: 110,
      squareKitchen: 35,
      roomCount: 5,
      rooms: '3 спальни, кухня-гостиная, 2 с/у, котельная',
      material: 'утепленный каркас',
      basement: 'Сваи железобетонные',
      communications: 'Электричество 15 кВт, водопровод, отопление, канализация'
    },
    homestead: {
      category: 'СНТ',
      squareArea: '8 соток',
      relief: 'Ровный',
      fence: 'Нет'
    },
  },
  links: {
    youtube: 'none'
  },

  seller: {
    manager: 'Елена Жукова',
    contact:  '+79000000000'
  },
  information: {
    common: 'Продается новый зимний дом 144,2 кв. м на участке 8 соток в дер. Келози, Ломоносовский район. Дом построен по каркасной технологии с утеплением, фундамент – железобетонные сваи (размер фундамента 10x11 м). Утепление стен, потолка, пола 200 мм, крыши 200 мм.',
    communications: '15 кВт электричества (напрямую в Ленэнерго), водопровод (скважина 36 метров), локальная канализация. Отопление от электокотла: теплый водяной пол на первом этаже, на втором этаже – конвектора.',
    plan: [
      {
      floor: '1 этаж',
      info:'прихожая, кухня-гостиная 33 кв.м, спальня 11 кв.м, с/у 8 кв.м, котельная, гардеробная, терасса.'
    },
      {
        floor: '2 этаж',
        info: 'коридор, три спальни 26, 13 и 13 кв.м , санузел, балкон.'
      }
    ],
    advantages: {
      bullet: [
        'В 5 минутах автобусная остановка.',
        'В непосредственной близости вся инфраструктура: школы, детские садики, амбулатория, магазины.',
        'Пляж и рыбалка в деревне Кипень в 10 минутах езды на машине.',
        'Рядом новая развязка Красное село-Кингисепп.'
      ],
      additional: [
        'Полная стоимость в договоре'
      ]
    }
  }
};


export default dataTemplate;
