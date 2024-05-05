import Sale from '~img/servicesPages/ourServicesBlock/ForSale.jpg';
import Buy from '~img/servicesPages/ourServicesBlock/Buy.jpg';
import Jud from '~img/servicesPages/ourServicesBlock/Jud.jpg';
import Key from '~img/servicesPages/ourServicesBlock/key.jpg';
import { servicesDataInterface } from "~data/constant/servicesBlock/allServicesPage/servicesListData/servicesListData.interface";
//import { ServiceCardProps } from '~common/ServicesList/ServiceCard/ServiceCard.props';

const homePageServicesItems: servicesDataInterface[] = [
  {
    _id: 1,
    title: 'Продажа',
    description: 'Поможем продать вашу загородную недвижимость, в короткий срок по максимальной цене',
    link: 'services/for-sellers',
    image: Sale
  },
  {
    _id: 2,
    title: 'Покупка',
    description: 'Решили купить загородную недвижимость? Звоните – поможем!',
    link: 'services/for-buyers',
    image: Buy
  },
  {
    _id: 3,
    title: 'Юридическое сопровождение',
    description: 'Юридическое сопровождение сделки, проверка и оформление документов',
    link: 'services/legal-support',
    image: Jud
  },
  {
    _id: 4,
    title: `Отдел продаж «под ключ»`,
    description: 'Требуется помощь в оптимизации процесса продаж существующего коттеджного поселка или организации продаж поселка «с нуля»? Звоните – поможем !',
    link: 'services/for-cottage-villages',
    image: Key
  },
];


export default homePageServicesItems;
