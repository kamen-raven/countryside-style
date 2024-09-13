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
        img: Service1_1,
        alt: 'Наш опыт и большое количество проведенных сделок позволяют достаточно точно определить рыночный диапазон, в котором можно продать Ваш объект.'
      },
      {
        _id: 2,
        img: Service1_2,
        alt: 'Для определения рыночной цены мы анализируем не только текущие объявления конкурентов, но и цены реальных сделок по похожим объектам.'
      },
      {
        _id: 3,
        img: Service1_3,
        alt: 'Организуем предпродажную подготовку объекта: клининг; строительные работы (при необходимости).'
      },
      {
        _id: 4,
        img: Service1_4,
        alt: 'В итоге - Ваш объект выгодно отличается от всех объектов-конкурентов. А, значит, будет продан быстрее и по более высокой цене.'
      },
    ],
  },
  {
    _id: 2,
    title: 'Реклама и поиск покупателя',
    images: [
      {
        _id: 1,
        img: Service2_1,
        alt: 'Делаем профессиональную фото- и видеосъемку'
      },
      {
        _id: 2,
        img: Service2_2,
        alt: 'Не только "на земле", но и "с высоты птичьего полета".'
      },
      {
        _id: 3,
        img: Service2_3,
        alt: 'Размещаем рекламу Вашего объекта на самых популярных сайтах по недвижимости.'
      },
      {
        _id: 4,
        img: Service2_4,
        alt: 'Предложим Ваш объект всем клиентам, которые интересовались похожими домами или участками за последние 6 месяцев.'
      },
      {
        _id: 5,
        img: Service2_5,
        alt: 'Берем на себя общение с клиентами и показы объекта.'
      },
      {
        _id: 6,
        img: Service2_6,
        alt: 'Держим Вас в курсе всех переговоров с клиентами. Согласовываем максимально выгодные для Вас условия сделки.'
      },
    ],
  },

  {
    _id: 3,
    title: 'Юридическое сопровождение сделки',
    images: [
      {
        _id: 1,
        img: Service3_1,
        alt: 'Когда клиент найден полностью готовим и проводим сделку.'
      },
      {
        _id: 2,
        img: Service3_2,
        alt: 'Собираем все необходимые справки и документы.'
      },
      {
        _id: 3,
        img: Service3_3,
        alt: 'Берем на себя организацию самых сложных сделок: с субсидиями; с ипотекой; с встречной сделкой.'
      },
      {
        _id: 4,
        img: Service3_4,
        alt: 'Полностью сопровождаем и контролируем взаиморасчеты и регистрацию сделки до получения Вами денег за проданный объект'
      },
      {
        _id: 5,
        img: Service3_5,
        alt: 'Сопровождаем Вас при передаче недвижимости покупателям.'
      },
    ],
  },
];

export default servicesCardsForSellers;
