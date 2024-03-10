import { MenuItemInterface } from "./menuList.interface.ts";

export const menuList: MenuItemInterface[] = [
  {
    name: "houses",
    title: "Дома, дачи, коттеджи",
    link: "/houses-and-cottages",
  },
  {
    name: "land",
    title: "Земельные участки",
    link: '/lands' // "/zemelnye-uchastki",
  },
  {
    name: "cottageSettlements",
    title: "Коттеджные поселки",
    link: '/villages' // "/kottedzhnye-poselki",
  },
  {
    name: "apartments",
    title: "Квартиры",
    link: '/flats' // "/kvartiry",
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
    secondLevel: [
      {
        name: "sellers",
        title: "Продажа",
        link: "/services/for-sellers",
      },
      {
        name: "buyer",
        title: "Покупка",
        link: "/services/for-buyer",
      },
      {
        name: "legal",
        title: "Юридическое сопровождение",
        link: "/services/legal-support",
      },
      {
        name: "cottageVillages",
        title: "Коттеджным поселкам",
        link: "/services/for-cottage-villages",
      },
      {
        name: "invest",
        title: "Инвестиции в загородную недвижимость",
        link: "/services/for-developers",
      },
      {
        name: "consult",
        title: "Продажа",
        link: "/services/legal-support",
      },
    ]
  },
  {
    name: "contacts",
    title: "Контакты",
    link: "/contacts",
  },
  {
    name: "reviews",
    title: "Отзывы",
    link: '/reviews'
  },
  {
    name: "blog",
    title: "Блог",
    link: '/blog'
  },
];
