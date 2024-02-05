import { MenuItemInterface } from "./menuList.interface.ts";

export const menuList: MenuItemInterface[] = [
  {
    name: "houses",
    title: "Дома, дачи, коттеджи",
    link: "/houses",
  },
  {
    name: "land",
    title: "Земельные участки",
    link: '/' // "/zemelnye-uchastki",
  },
  {
    name: "cottageSettlements",
    title: "Коттеджные поселки",
    link: '/' // "/kottedzhnye-poselki",
  },
  {
    name: "apartments",
    title: "Квартиры",
    link: '/' // "/kvartiry",
  },
  {
    name: "company",
    title: "О компании",
    link: "/about",
  },
  {
    name: "services",
    title: "Услуги",
    link: "/services",
/*     secondLevel: [
      {
        name: "sellers",
        title: "Продажа",
        link: "/services/for-sellers",
      },
      {
        name: "buyer",
        title: "Покупка",
        link: "/services/for-buyer",
      }
    ] */
  },
  {
    name: "contacts",
    title: "Контакты",
    link: "/contacts",
  },
  {
    name: "reviews",
    title: "Отзывы",
    link: '/' // "/otzyvy",
  },
  {
    name: "blog",
    title: "Блог",
    link: '/' // "/blog",
  },
];
