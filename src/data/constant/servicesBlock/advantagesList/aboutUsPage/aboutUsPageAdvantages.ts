import { advantagesItemInterface } from "../advantagesItem.interface";

import YearsIcon from "~svg/icons/10years.svg";
import LawIcon from "~svg/icons/law.svg";
import GuardIcon from "~svg/icons/guard.svg";
import CashIcon from "~svg/icons/cash.svg";
import ContractIcon from "~svg/icons/contract.svg";
import SafetyIcon from "~svg/icons/safety.svg";


const aboutUsPageAdvantages: advantagesItemInterface[] = [
  {
    _id: 1,
    icon: YearsIcon,
    title:
      "Одни из лучших специалистов на рынке загородной недвижимости с опытом работы более 13 лет",
    },
    {
      _id: 2,
      icon: CashIcon,
      title: "Честная фиксированная стоимость услуг",
    },
  {
    _id: 3,
    icon: LawIcon,
    title: "Полное юридическое сопровождение",
  },
  {
    _id: 4,
    icon: ContractIcon,
    title: "Оплата услуг по факту продажи объекта",
  },
  {
    _id: 5,
    icon: GuardIcon,
    title: "Страхование ответственности",
  },
  {
    _id: 6,
    icon: SafetyIcon,
    title: "Безопасность и надежность",
  },
];

export default aboutUsPageAdvantages;
