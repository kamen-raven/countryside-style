import Service1_1 from '~img/servicesPages/storiesCards/forSellersPage/01rating_1.jpg';
import Service1_2 from '~img/servicesPages/storiesCards/forSellersPage/01rating_2.jpg';
import Service1_3 from '~img/servicesPages/storiesCards/forSellersPage/01rating_3.jpg';
import Service1_4 from '~img/servicesPages/storiesCards/forSellersPage/01rating_4.jpg';



import Service2_1 from '~img/servicesPages/storiesCards/forSellersPage/02add_and_search_1.jpg';
import Service2_2 from '~img/servicesPages/storiesCards/forSellersPage/02add_and_search_2.jpg';
import Service2_3 from '~img/servicesPages/storiesCards/forSellersPage/02add_and_search_3.jpg';
import Service2_4 from '~img/servicesPages/storiesCards/forSellersPage/02add_and_search_4.jpg';
import Service2_5 from '~img/servicesPages/storiesCards/forSellersPage/02add_and_search_5.jpg';
import Service2_6 from '~img/servicesPages/storiesCards/forSellersPage/02add_and_search_6.jpg';


import Service3_1 from '~img/servicesPages/storiesCards/forSellersPage/03maintenance_1.jpg';
import Service3_2 from '~img/servicesPages/storiesCards/forSellersPage/03maintenance_2.jpg';
import Service3_3 from '~img/servicesPages/storiesCards/forSellersPage/03maintenance_3.jpg';
import Service3_4 from '~img/servicesPages/storiesCards/forSellersPage/03maintenance_4.jpg';
import Service3_5 from '~img/servicesPages/storiesCards/forSellersPage/03maintenance_5.jpg';



import { servicesCardsInterface } from '../servicesCards.interface';



const servicesCardsForSellers: servicesCardsInterface[] = [
  {
    _id: 1,
    title: 'Оценка',
    images: [
      {
        _id: 1,
        img: Service1_1
      },
      {
        _id: 2,
        img: Service1_2
      },
      {
        _id: 3,
        img: Service1_3
      },
      {
        _id: 4,
        img: Service1_4
      },
    ],
  },
  {
    _id: 2,
    title: 'Реклама и поиск покупателя',
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
    ],
  },

  {
    _id: 3,
    title: 'Юридическое сопровождение сделки',
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
    ],
  },
];

export default servicesCardsForSellers;
