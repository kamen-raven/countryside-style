import TemplateImage from '~img/template/House_5 1.jpg';
import TemplateImage2 from '~img/template/House_3.jpg';
import TemplateImage3 from '~img/template/House_9.jpg';
import { objectItemInterface } from './objectItem.interface';


const objectsTemplate: objectItemInterface[] = [
  {
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
      youtube: 'youtube.com/example'
    },

    seller: {
      manager: 'Елена Жукова',
      contact:  '+79100000000'
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
  },
  {
    id: 2,
    status: 'new',
    title: 'д. Келози',
    type: 'дача',
    mainImage: TemplateImage2,
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
      youtube: ''
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
  },
  {
    id: 123456,
    status: 'sold',
    title: 'д. Новый Лес',
    type: 'коттедж',
    mainImage: TemplateImage3,
    address: {
      area: 'Петербург',
      town: 'д. Новый Лес',
      organization: 'КП «Зеленый Бор»',
      map: {
        coordinateX: '',
        coordinateY: '',
        mapLink: 'https://yandex.ru/map-widget/v1/?um=constructor%3Aanother_map_link'
      }
    },
    cost: 12.5,
    characteristics: {
      distanceToKad: '10 км',
      house: {
        squareHouse: 200,
        squareLiving: 150,
        squareKitchen: 50,
        roomCount: 6,
        rooms: '4 спальни, кухня, 2 с/у',
        material: 'кирпич',
        basement: 'Ленточный фундамент',
        communications: 'Электричество 20 кВт, газ, водопровод, отопление, канализация'
      },
      homestead: {
        category: 'ИЖС',
        squareArea: '10 соток',
        relief: 'Ухоженный',
        fence: 'Забор'
      },
    },
    links: {
      youtube: ''
    },
    seller: {
      manager: 'Иван Петров',
      contact:  '+79111111111'
    },
    information: {
      common: 'Продается красивый коттедж в д. Новый Лес, Петербург. ...',
      communications: '20 кВт электричества, газовое отопление, водопровод, центральная канализация. ...',
      plan: [
        {
          floor: '1 этаж',
          info:'прихожая, кухня 25 кв.м, гостиная 40 кв.м, спальня 15 кв.м, с/у.'
        },
        {
          floor: '2 этаж',
          info: 'коридор, три спальни 20, 18 и 16 кв.м , санузел, балкон.'
        }
      ],
      advantages: {
        bullet: [
          'Тихое и зеленое место.',
          'Близость к лесу.',
          'Удобный выезд на трассу.',
          'Развитая инфраструктура в 5 минутах езды.'
        ],
        additional: [
          'Документы готовы к сделке.'
        ]
      }
    }
  },
  {
    id: 789012,
    status: 'sold',
    title: 'д. Зеленое Поле',
    type: 'дача',
    mainImage: TemplateImage,
    address: {
      area: 'Ленинградская область',
      town: 'д. Зеленое Поле',
      organization: 'ООО "Зеленый Поле"',
      map: {
        coordinateX: '',
        coordinateY: '',
        mapLink: 'https://yandex.ru/map-widget/v1/?um=constructor%3Ayet_another_map_link'
      }
    },
    cost: 5.75,
    characteristics: {
      distanceToKad: '15 км',
      house: {
        squareHouse: 120,
        squareLiving: 90,
        squareKitchen: 30,
        roomCount: 4,
        rooms: '2 спальни, гостиная, кухня, с/у',
        material: 'брус',
        basement: 'Свайный фундамент',
        communications: 'Электричество 10 кВт, водопровод, отопление, септик'
      },
      homestead: {
        category: 'СНТ',
        squareArea: '6 соток',
        relief: 'Ровный',
        fence: 'Есть'
      }
    },
    links: {
      youtube: ''
    },
    seller: {
      manager: 'Марина Сидорова',
      contact: '+79222222222'
    },
    information: {
      common: 'Продается уютная дача в д. Зеленое Поле, Ленинградская область. ...',
      communications: '10 кВт электричества, водопровод, отопление печное, септик. ...',
      plan: [
        {
          floor: '1 этаж',
          info: 'гостиная, кухня, спальня, с/у.'
        }
      ],
      advantages: {
        bullet: [
          'Красивый вид на природу.',
          'Тихое место для отдыха.',
          'Хороший подъезд круглый год.',
          'Близость к лесу.'
        ],
        additional: [
          'Документы в порядке.'
        ]
      }
    }
  },
  {
    id: 345678,
    status: 'sold',
    title: 'кв. Центральный',
    type: 'квартира',
    mainImage: TemplateImage2,
    address: {
      area: 'Санкт-Петербург',
      town: 'Центральный район',
      organization: 'ООО "Квартиры на Продажу"',
      map: {
        coordinateX: '',
        coordinateY: '',
        mapLink: 'https://yandex.ru/map-widget/v1/?um=constructor%3Aapartment_map_link'
      }
    },
    cost: 150,
    characteristics: {
      distanceToKad: '1 км',
      house: {
        squareHouse: 85,
        squareLiving: 90,
        squareKitchen: 12,
        roomCount: 4,
        rooms: '2 спальни, гостиная, кухня, с/у',
        communications: 'Электричество 10 кВт, водопровод, отопление, септик'
      },
    },
    links: {
      youtube: ''
    },
    seller: {
      manager: 'Андрей Иванов',
      contact: '+79333333333'
    },
    information: {
      common: 'Продается просторная трехкомнатная квартира в центре Санкт-Петербурга. ...',
      communications: 'Центральное отопление, водопровод, канализация. ...',
      advantages: {
        bullet: [
          'Отличная транспортная доступность.',
          'Близость к центральным достопримечательностям.',
          'Развитая инфраструктура района.',
          'Школы и детские сады в пешей доступности.'
        ],
        additional: [
          'Возможна ипотека.'
        ]
      }
    }
  },
  {
    id: 8534,
    status: 'sold',
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
      youtube: ''
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
  },
  {
    id: 1234,
    status: 'available',
    title: 'Новая дача',
    type: 'дача',
    mainImage: TemplateImage3,
    address: {
      area: 'Новый р-н',
      town: 'Новая дача',
      organization: 'Новая организация',
      map: {
        coordinateX: '56.12345',
        coordinateY: '30.98765',
        mapLink: 'https://yandex.ru/map-widget/v1/?um=constructor%3Aexample-link'
      }
    },
    cost: 10.99,
    characteristics: {
      distanceToKad: '5 км',
      house: {
        squareHouse: 120.5,
        squareLiving: 90,
        squareKitchen: 30.5,
        roomCount: 4,
        rooms: '2 спальни, кухня, с/у, гостиная',
        material: 'кирпич',
        basement: 'Фундамент на сваях',
        communications: 'Электричество 20 кВт, водопровод, отопление, канализация'
      },
      homestead: {
        category: 'ДНТ',
        squareArea: '10 соток',
        relief: 'Холмистый',
        fence: 'Есть'
      },
    },
    links: {
      youtube: 'https://www.youtube.com/example'
    },
    seller: {
      manager: 'Иван Петров',
      contact: '+79111111111'
    },
    information: {
      common: 'Продается новая дача 120.5 кв. м на участке 10 соток в Новом районе. Дом построен из кирпича, с фундаментом на сваях. Все коммуникации доступны: электричество 20 кВт, водопровод, отопление, канализация.',
      communications: 'Отличная инфраструктура: школы, детские сады, магазины - все рядом. Близко к остановке общественного транспорта. Прекрасные условия для жизни и отдыха.',
      plan: [
        {
          floor: '1 этаж',
          info: 'гостиная, кухня, спальня, с/у'
        },
        {
          floor: '2 этаж',
          info: 'коридор, две спальни, санузел, балкон'
        }
      ],
      advantages: {
        bullet: [
          'Близость к общественному транспорту.',
          'Отличная инфраструктура в шаговой доступности.',
          'Прекрасные условия для отдыха и релаксации.'
        ],
        additional: [
          'Готовность к заселению.'
        ]
      }
    }
  },
  {
    id: 9876,
    status: 'available',
    title: 'д. Новое Место',
    type: 'дача',
    mainImage: TemplateImage2,
    address: {
      area: 'Пушкинский р-н',
      town: 'д. Новое Место',
      organization: 'КП «Зеленая поляна»',
      map: {
        coordinateX: '',
        coordinateY: '',
        mapLink: 'https://yandex.ru/map-widget/v1/?um=constructor%3Aa1b2c3d4e5f6g7h8i9j0&amp'
      }
    },
    cost: 6.45,
    characteristics: {
      distanceToKad: '5 км',
      house: {
        squareHouse: 120.5,
        squareLiving: 95,
        squareKitchen: 25.5,
        roomCount: 4,
        rooms: '2 спальни, гостиная, с/у, кухня',
        material: 'брус',
        basement: 'Фундамент на сваях',
        communications: 'Электричество 10 кВт, водопровод, отопление'
      },
      homestead: {
        category: 'ДНП',
        squareArea: '10 соток',
        relief: 'Участок с легким наклоном',
        fence: 'Есть'
      }
    },
    links: {
      youtube: 'https://www.youtube.com/watch?v=abcdefghijk'
    },
    seller: {
      manager: 'Александр Иванов',
      contact: '+79111111111'
    },
    information: {
      common: 'Продается уютный дом 120,5 кв. м на участке 10 соток в дер. Новое Место, Пушкинский район. Дом построен из бруса, фундамент – сваи. Площадь участка позволяет создать ухоженный сад или огород.',
      communications: '10 кВт электричества, водопровод. Отопление от камина.',
      plan: [
        {
          floor: '1 этаж',
          info: 'гостиная, кухня, спальня, санузел, терраса.'
        },
        {
          floor: 'Мансарда',
          info: 'большая спальня, рабочий кабинет.'
        }
      ],
      advantages: {
        bullet: [
          'Тихое место, подходит для отдыха от городской суеты.',
          'Ухоженный сад с фруктовыми деревьями.',
          'Близость к парку и лесной зоне.',
          'Удобный подъезд от трассы.'
        ],
        additional: [
          'Возможен торг при серьезном интересе.'
        ]
      }
    }
  }
];




export default objectsTemplate;
