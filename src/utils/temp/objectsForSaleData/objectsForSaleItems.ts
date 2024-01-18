import { ObjectForSaleProps } from "~pages/01_HomePage/HomePage/blocks/ObjectsForSaleBlock/elements/ObjectForSale/ObjectForSale.props";

import HouseGen from '~img/objectsForSaleBlock/DachaGen.jpg';
import HouseSm from '~img/objectsForSaleBlock/DachaSm.jpg';
import CottageGen from '~img/objectsForSaleBlock/CottageGen.jpg';
import CottageSm from '~img/objectsForSaleBlock/CottageSm.jpg';
import LandGen from '~img/objectsForSaleBlock/UchastkiGen.jpg';
import LandSm from '~img/objectsForSaleBlock/UchastkiSm.jpg';
import FlatGen from '~img/objectsForSaleBlock/KvartiryGen.jpg';
import FlatSm from '~img/objectsForSaleBlock/KvartirySm.jpg';



const objectsForSaleData: ObjectForSaleProps[] = [
  {
    title: 'Дома, дачи, коттеджи',
    buttonText: 'Перейти',
    description: 'Мы продаем только те объекты, которые видели своими глазами',
    arrows: true,
    containerTemplate: 'picFirst',
    photoGeneral: HouseGen,
    photoSecondary: HouseSm,
  },
  {
    title: 'Земельные участки',
    buttonText: 'Перейти',
    description: 'Мы продаем только те объекты, которые видели своими глазами',
    arrows: true,
    containerTemplate: 'textFirst',
    photoGeneral: LandGen,
    photoSecondary: LandSm,
  },
  {
    title: 'Коттеджные поселки',
    buttonText: 'Перейти',
    description: 'Мы продаем только те объекты, которые видели своими глазами',
    arrows: true,
    containerTemplate: 'picFirst',
    photoGeneral: CottageGen,
    photoSecondary: CottageSm,
    },
    {
      title: 'Квартиры',
      buttonText: 'Перейти',
      description: 'Мы продаем только те объекты, которые видели своими глазами',
      arrows: true,
      containerTemplate: 'textFirst',
      photoGeneral: FlatGen,
      photoSecondary: FlatSm,
    },
];

export default objectsForSaleData;
