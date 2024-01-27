import { advantagesItemInterface } from "../advantagesItem.interface";

import CheckingIcon from "~svg/icons/checking.svg";
import ConsultIcon from "~svg/icons/consult.svg";
import SchemaIcon from "~svg/icons/schema.svg";
import NegotiationsIcon from "~svg/icons/negotiations.svg";



const legalSupportServices: advantagesItemInterface[] = [
  {
    _id: 1,
    icon: CheckingIcon,
    title:
      "Проверка документов",
    description: ''
    },
    {
      _id: 2,
      icon: ConsultIcon,
      title: "Консультация по налогам",
      description: ''
    },
  {
    _id: 3,
    icon: SchemaIcon,
    title: "Разработка безопасной схемы",
    description: ''
  },
  {
    _id: 4,
    icon: NegotiationsIcon,
    title: "Проведение переговорам с продавцами и покупателями",
    description: ''
  },
];

export default legalSupportServices;
