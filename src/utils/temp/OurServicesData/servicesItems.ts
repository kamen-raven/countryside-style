import { ServiceCardProps } from "~features/ServiceCard/ServiceCard.props";
import Sale from '~img/OurServicesBlock/ForSale.jpg';
import Buy from '~img/OurServicesBlock/Buy.jpg';
import Jud from '~img/OurServicesBlock/Jud.jpg';
import Key from '~img/OurServicesBlock/key.jpg';




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
