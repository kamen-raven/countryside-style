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
    link: null,
    image: BuildImg,
  },
  {
    _id: 2,
    title: 'Приобретение или строительство загородных объектов',
    description: 'Для долгосрочной или\u00A0краткосрочной аренды.',
    link:  null,
    image: PurchaseImg
  },
  {
    _id: 3,
    title: 'Приобретение земельных массивов (оптом)',
    description: 'C\u00A0целью последующей перепродажи в\u00A0розницу.',
    link:  null,
    image: LandsImg
  },
  {
    _id: 4,
    title: 'Приобретение участка «на\u00A0вырост»',
    description: 'Покупка участка на\u00A0старте продаж коттеджного поселка с\u00A0целью дальнейшей перепродажи',
    link:  null,
    image: GrowImg
  },
];

export default servicesOffersData_forDevelopers;
