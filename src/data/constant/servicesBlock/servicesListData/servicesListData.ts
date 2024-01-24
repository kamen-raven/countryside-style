import { servicesDataInterface } from './servicesListData.interface';

// img
import SaleImg from '~img/servicesPages/servicesCards/sale.jpg';
import BuyImg from '~img/servicesPages/servicesCards/Buy.jpg';
import LawImg from '~img/servicesPages/servicesCards/law.jpg';
import VillageImg from '~img/servicesPages/servicesCards/villages.jpg';
import InvestImg from '~img/servicesPages/servicesCards/invest.jpg';
import ConsultImg from '~img/servicesPages/servicesCards/consult.jpg';


const servicesData: servicesDataInterface[]= [
  {
    _id: 1,
    title: 'Продажа',
    description: 'Поможем продать вашу загородную недвижимость, в короткий срок по максимальной цене',
    link: 'services/for-sellers',
    image: SaleImg,
  },
  {
    _id: 2,
    title: 'Покупка',
    description: 'Решили купить загородную недвижимость? Звоните – поможем!',
    link: '/',
    image: BuyImg
  },
  {
    _id: 3,
    title: 'Юридическое сопровождение',
    description: 'Юридическое сопровождение сделки, проверка и оформление документов',
    link: '/',
    image: LawImg
  },
  {
    _id: 4,
    title: 'Коттеджным поселкам',
    description: 'Требуется помощь в оптимизации процесса продаж существующего коттеджного поселка или организации продаж поселка «с нуля»? Звоните – поможем!',
    link: '/',
    image: VillageImg
  },
  {
    _id: 5,
    title: 'Инвестиции в\u00A0загородную недвижимость',
    description: 'Уже построили дом на продажу или только планируете? Звоните – поможем!',
    link: '/',
    image: InvestImg
  },
  {
    _id: 6,
    title: 'Консультация специалиста',
    description: 'Нужна консультация опытного специалиста по недвижимости? Звоните - поможем!',
    link: '/',
    image: ConsultImg
  },
];

export default servicesData;