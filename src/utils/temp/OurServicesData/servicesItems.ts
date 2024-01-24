import { ServiceCardProps } from "../../../components/03_commonBlocks/ServicesList/ServiceCard/ServiceCard.props";
import Sale from '~img/servicesPages/ourServicesBlock/ForSale.jpg';
import Buy from '~img/servicesPages/ourServicesBlock/Buy.jpg';
import Jud from '~img/servicesPages/ourServicesBlock/Jud.jpg';
import Key from '~img/servicesPages/ourServicesBlock/key.jpg';




const servicesData: ServiceCardProps[] = [
  {
    title: 'Продажа',
    buttonText: 'Подробнее',
    description: 'Поможем продать вашу загородную недвижимость, в короткий срок по максимальной цене',
    arrows: false,
    containerTemplate: 'picFirst',
    containerSize: 'small',
    image: Sale
  },
  {
    title: 'Покупка',
    buttonText: 'Подробнее',
    description: 'Решили купить загородную недвижимость? Звоните – поможем!',
    arrows: false,
    containerTemplate: 'picFirst',
    containerSize: 'small',
    image: Buy
  },
  {
    title: 'Юридическое сопровождение',
    buttonText: 'Подробнее',
    description: 'Юридическое сопровождение сделки, проверка и оформление документов',
    arrows: false,
    containerTemplate: 'picFirst',
    containerSize: 'big',
    image: Jud
  },
  {
    title: 'Отдел продаж «под ключ»',
    buttonText: 'Подробнее',
    description: 'Требуется помощь в оптимизации процесса продаж существующего коттеджного поселка или организации продаж поселка «с нуля»? Звоните – поможем!',
    arrows: false,
    containerTemplate: 'textFirst',
    containerSize: 'big',
    image: Key
  },
];

export default servicesData;
