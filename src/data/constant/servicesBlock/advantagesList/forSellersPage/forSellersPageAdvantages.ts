import { advantagesItemInterface } from "../advantagesItem.interface";

import HouseIcon from "~svg/icons/house.svg";
import ContractIcon from "~svg/icons/contract.svg";
import CashIcon from "~svg/icons/cash.svg";
import TimerIcon from "~svg/icons/time.svg";
import AdvertIcon from "~svg/icons/ad.svg";
import GuardIcon from "~svg/icons/guard.svg";


const forSellersPageAdvantages: advantagesItemInterface[] = [
  {
    _id: 1,
    icon: HouseIcon,
    title:
      "Узкая специализация на\u00A0загородной недвижимости",
    description: 'Мы работаем только с\u00A0загородной недвижимостью, знаем все нюансы сделок, у\u00A0нас есть накопленный спрос.'
    },
    {
      _id: 2,
      icon: ContractIcon,
      title: "Полное юридическое сопровождение",
      description: 'Проверяем все риски и\u00A0сводим к\u00A0минимуму потенциальные угрозы сделки.'
    },
  {
    _id: 3,
    icon: CashIcon,
    title: "Честная фиксированная комиссия",
    description: 'Стоимость наших услуг фиксируется в момент обращения и\u00A0не\u00A0меняется в\u00A0процессе работы.'
  },
  {
    _id: 4,
    icon: TimerIcon,
    title: "Мобильность и\u00A0оперативность",
    description: 'Сегодня – ваш звонок. Завтра – встреча в офисе или\u00A0на\u00A0объекте. Послезавтра – ваш объект рекламируется и мы собираем обратную связь.'
  },
  {
    _id: 5,
    icon: AdvertIcon,
    title: "Современная реклама",
    description: 'Чтобы выгодно продать дом или участок мы делаем грамотную предпродажную подготовку, готовим качественные фото и\u00A0видео, покупаем самую эффективную рекламу.'
  },
  {
    _id: 6,
    icon: GuardIcon,
    title: "Страхование ответственности",
    description: 'Ответственность по\u00A0всем сделкам агентства недвижимости застрахована страховой компанией РЕСО-гарантия'
  },
];

export default forSellersPageAdvantages;
