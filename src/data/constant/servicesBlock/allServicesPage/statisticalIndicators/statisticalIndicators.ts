import { statisticalIndicatorsInterface } from "./statisticalIndicators.interface";

const statisticalIndicatorsData: statisticalIndicatorsInterface[] = [
  {
    _id: 1,
    title: 'Продали объектов',
    statIndicator: '3 000',
    statLabel: 'объектов',
    description: ''
  },
  {
    _id: 2,
    title: 'Сэкономили клиентам времени',
    statIndicator: '100 000',
    statLabel: 'часов',
    description: 'Клиенты не тратили время на прием звонков, показы, согласование сделки и подготовку документов.'
  },
  {
    _id: 3,
    title: 'Сэкономили налогов',
    statIndicator: '125',
    statLabel: 'млн. руб.',
    description: 'Законом предусмотрены способы легализации налогов с продажи недвижимости, к сожалению, не все о них знают.'
  },
  {
    _id: 4,
    title: 'Мы помогли заработать',
    statIndicator: '300',
    statLabel: 'млн. руб.',
    description: 'нашим клиентам с помощью инвестиций в недвижимость.'
  },
];

export default statisticalIndicatorsData;
