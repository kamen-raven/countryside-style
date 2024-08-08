import { statisticalIndicatorsInterface } from "./statisticalIndicators.interface";

const statisticalIndicatorsData: statisticalIndicatorsInterface[] = [
  {
    _id: 1,
    title: 'Продано',
    statIndicator: '2\u00A0000',
    statLabel: 'объектов',
    description: ''
  },
  {
    _id: 2,
    title: 'Сэкономили клиентам времени',
    statIndicator: '100\u00A0000',
    statLabel: 'часов',
    description: 'Клиенты не тратили время на прием звонков, показы, согласование сделки и\u00A0подготовку документов.'
  },
  {
    _id: 3,
    title: 'Сэкономили наши клиенты',
    statIndicator: '45',
    statLabel: 'млн. руб.',
    description: 'Поможем Вам законным способом уменьшить налог с\u00A0продажи Вашего объекта недвижимости.'
  },
  {
    _id: 4,
    title: 'Мы помогли заработать',
    statIndicator: '300',
    statLabel: 'млн. руб.',
    description: 'нашим клиентам с помощью инвестиций в\u00A0недвижимость.'
  },
];

export default statisticalIndicatorsData;
