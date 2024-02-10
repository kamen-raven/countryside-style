import { servicesDataInterface } from '../allServicesPage/servicesListData/servicesListData.interface';

// img
import BuildImg from '~img/servicesPages/servicesOffers/D_Building.jpg';
import PurchaseImg from '~img/servicesPages/servicesOffers/D_Purchase.jpg';
import GrowImg from '~img/servicesPages/servicesOffers/D_PurchaseGrow.jpg';
import LandsImg from '~img/servicesPages/servicesOffers/D_PurchaseLands.jpg';

const servicesOffersData_forDevelopers: servicesDataInterface[]= [
  {
    _id: 1,
    title: 'Строительство загородных домов',
    description: '',
    link: '',
    image: BuildImg,
  },
  {
    _id: 2,
    title: 'Приобретение или строительство загородных объектов',
    description: 'Для долгосрочной или краткосрочной аренды.',
    link: '',
    image: PurchaseImg
  },
  {
    _id: 3,
    title: 'Приобретение земельных массивов (оптом)',
    description: 'C целью последующей перепродажи в розницу.',
    link: '',
    image: LandsImg
  },
  {
    _id: 4,
    title: 'Приобретение участка «на вырост»',
    description: 'Покупка участка на старте продаж коттеджного поселка с целью дальнейшей перепродажи',
    link: '',
    image: GrowImg
  },
];

export default servicesOffersData_forDevelopers;
