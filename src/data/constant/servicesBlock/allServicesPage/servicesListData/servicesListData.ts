import { servicesDataInterface } from './servicesListData.interface';

// img
import SaleImg from '~img/servicesPages/servicesCards/sale.jpg';
import BuyImg from '~img/servicesPages/servicesCards/buy.jpg';
import LawImg from '~img/servicesPages/servicesCards/law.jpg';
import VillageImg from '~img/servicesPages/servicesCards/villages.jpg';
import InvestImg from '~img/servicesPages/servicesCards/invest.jpg';
import ConsultImg from '~img/servicesPages/servicesCards/consult.jpg';


const servicesData: servicesDataInterface[]= [
  {
    _id: 1,
    title: 'Продажа',
    description: 'Поможем продать вашу загородную недвижимость, в\u00A0короткий срок по\u00A0максимальной цене',
    link: 'services/for-sellers',
    image: SaleImg,
  },
  {
    _id: 2,
    title: 'Покупка',
    description: 'Решили купить загородную недвижимость? Звоните\u00A0– поможем!',
    link: 'services/for-buyers',
    image: BuyImg
  },
  {
    _id: 3,
    title: 'Юридическое сопровождение',
    description: 'Юридическое сопровождение сделки, проверка и\u00A0оформление документов',
    link: 'services/legal-support',
    image: LawImg
  },
  {
    _id: 4,
    title: 'Отдел продаж «под ключ»',
    description: 'Требуется помощь в\u00A0оптимизации процесса продаж существующего коттеджного поселка или организации продаж поселка «с\u00A0нуля»? Звоните\u00A0– поможем!',
    link: 'services/for-cottage-villages',
    image: VillageImg
  },
  {
    _id: 5,
    title: 'Инвестиции в\u00A0загородную недвижимость',
    description: 'Уже построили дом на\u00A0продажу или только планируете? Звоните\u00A0– поможем!',
    link: 'services/for-developers',
    image: InvestImg
  },
  {
    _id: 6,
    title: 'Консультация специалиста',
    description: 'Нужна консультация опытного специалиста по\u00A0недвижимости? Звоните\u00A0- поможем!',
    link: 'services/legal-support',
    image: ConsultImg
  },
];

export default servicesData;
