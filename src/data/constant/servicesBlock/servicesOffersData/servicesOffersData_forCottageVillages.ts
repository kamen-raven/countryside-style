import { servicesDataInterface } from '../allServicesPage/servicesListData/servicesListData.interface';

// img
import SaleDepartmentImg from '~img/servicesPages/servicesOffers/CV_SaleDepartment.jpg';
import AdvertImg from '~img/servicesPages/servicesOffers/CV_Advert.jpg';
import SupportDealImg from '~img/servicesPages/servicesOffers/CV_SupportDeal.jpg';
import NegotiationsImg from '~img/servicesPages/servicesOffers/CV_Negotiations.jpg';



const servicesOffersData_forCottageVillages: servicesDataInterface[]= [
  {
    _id: 1,
    title: 'Дублирование функций отдела продаж',
    description: 'Получаете полноценный отдел продаж, который не\u00A0требует никаких вложений и\u00A0избавляет Вас от\u00A0лишней работы и\u00A0постоянных издержек.',
    link:  null,
    image: SaleDepartmentImg,
  },
  {
    _id: 2,
    title: 'Реклама объектов',
    description: 'Предпродажная подготовка вашего поселка и\u00A0самая современная реклама.',
    link:  null,
    image: AdvertImg
  },
  {
    _id: 3,
    title: 'Сопровождение сделки',
    description: 'Полное сопровождение сделки купли-продажи и\u00A0регистрации в\u00A0Росреестре.',
    link:  null,
    image: SupportDealImg
  },
  {
    _id: 4,
    title: 'Переговоры с\u00A0клиентом',
    description: 'Все переговоры, показы и\u00A0оформление берем на\u00A0себя, работаем с\u00A0клиентами, которым необходим зачет недвижимости.',
    link:  null,
    image: NegotiationsImg
  },
];

export default servicesOffersData_forCottageVillages;
