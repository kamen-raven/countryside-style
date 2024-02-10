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
    description: 'Получаете полноценный отдел продаж, который не требует никаких вложений и избавляет Вас от лишней бухгалтерской работы и постоянных издержек.',
    link: '',
    image: SaleDepartmentImg,
  },
  {
    _id: 2,
    title: 'Реклама объектов',
    description: 'Предпродажная подготовка вашего поселка и самая современная реклама.',
    link: '',
    image: AdvertImg
  },
  {
    _id: 3,
    title: 'Сопровождение сделки',
    description: 'Полное сопровождение сделки купли-продажи и регистрации в Росреестре.',
    link: '',
    image: SupportDealImg
  },
  {
    _id: 4,
    title: 'Переговоры с клиентом',
    description: 'Все переговоры, показы и оформление берем на себя, работаем с клиентами, которым необходим зачет недвижимости.',
    link: '',
    image: NegotiationsImg
  },
];

export default servicesOffersData_forCottageVillages;
