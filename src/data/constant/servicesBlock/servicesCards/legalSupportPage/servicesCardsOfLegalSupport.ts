import Service2_1 from '~img/servicesPages/template/2 (1).png';
import Service2_2 from '~img/servicesPages/template/2 (2).png';
import Service2_3 from '~img/servicesPages/template/2 (3).png';
import Service2_4 from '~img/servicesPages/template/2 (4).png';
import Service2_5 from '~img/servicesPages/template/2 (5).png';
import Service2_6 from '~img/servicesPages/template/2 (6).png';
import Service2_7 from '~img/servicesPages/template/2 (7).png';
import Service2_8 from '~img/servicesPages/template/2 (8).png';

import Service3_1 from '~img/servicesPages/template/3 (1).png';
import Service3_2 from '~img/servicesPages/template/3 (2).png';
import Service3_3 from '~img/servicesPages/template/3 (3).png';
import Service3_4 from '~img/servicesPages/template/3 (4).png';
import Service3_5 from '~img/servicesPages/template/3 (5).png';
import Service3_6 from '~img/servicesPages/template/3 (6).png';
import Service3_7 from '~img/servicesPages/template/3 (7).png';
import { servicesCardsInterface } from '../servicesCards.interface';



const servicesCardsOfLegalSupport: servicesCardsInterface[] = [
  {
    _id: 1,
    title: 'Сопровождение сделки',
    images: [
      {
        _id: 1,
        img: Service2_1
      },
      {
        _id: 2,
        img: Service2_2
      },
      {
        _id: 3,
        img: Service2_3
      },
      {
        _id: 4,
        img: Service2_4
      },
      {
        _id: 5,
        img: Service2_5
      },
      {
        _id: 6,
        img: Service2_6
      },
      {
        _id: 7,
        img: Service2_7
      },
      {
        _id: 8,
        img: Service2_8
      },
    ],
  },

  {
    _id: 2,
    title: 'Консультация',
    images: [
      {
        _id: 1,
        img: Service3_1
      },
      {
        _id: 2,
        img: Service3_2
      },
      {
        _id: 3,
        img: Service3_3
      },
      {
        _id: 4,
        img: Service3_4
      },
      {
        _id: 5,
        img: Service3_5
      },
      {
        _id: 6,
        img: Service3_6
      },
      {
        _id: 7,
        img: Service3_7
      },
    ],
  },
];

export default servicesCardsOfLegalSupport;
