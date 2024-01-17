import { teamMembersDataInterface } from "./teamMembersData.interface";
// Photos
import Person1 from "~img/Team/Person1.jpg";
import Person2 from "~img/Team/Person2.jpg";
import Person3 from "~img/Team/Person3.jpg";
import Person4 from "~img/Team/Person4.jpg";
import Person5 from "~img/Team/Person5.jpg";

const teamMembersData: teamMembersDataInterface[] = [
  {
    _id: 1,
    role: "owner",
    name: "Павел Соколов",
    jobTitle: "Управляющий партнер",
    quote:
      "Мы – небольшое агентство, но это наше большое преимущество. Нам ни к чему специалисты, которые не умеют работать и тысячи объектов в базе только для галочки.",
    photo: Person1,
    contacts: {
      phone: "+79219920152",
      whatsapp: "https://wa.me/79219920152",
      telegram: "https://t.me/sokolovpv",
    },
    location: "Санкт-Петербург",
  },
  {
    _id: 2,
    role: "owner",
    name: "Пётр Манько",
    jobTitle: "Управляющий партнер",
    quote:
      "Мы – небольшое агентство, но это наше большое преимущество. Нам ни к чему специалисты, которые не умеют работать и тысячи объектов в базе только для галочки.",
    photo: Person2,
    contacts: {
      phone: "+79219416706",
      whatsapp: "https://wa.me/79219416706",
      telegram: "https://t.me/Peter_1979",
    },
    location: "Санкт-Петербург",
  },
  {
    _id: 3,
    role: "employee",
    name: "Дарья Власова",
    jobTitle: "Специалист по сопровождению сделок с недвижимостью",
    quote: "Lorem dolor adipisicing magna amet.",
    photo: Person3,
    contacts: {
      phone: "+79215616257",
      whatsapp: "https://wa.me/79215616257",
      telegram: "https://t.me/nefeoktistova",
    },
    location: "Санкт-Петербург",
  },
  {
    _id: 4,
    role: "employee",
    name: "Виктория Нардина",
    jobTitle:
`Ведущий специалист по ипотеке,  
специалист по продажам`,

    quote:
      "Adipisicing Lorem in labore aliqua deserunt officia non id sit eiusmod ad id cupidatat excepteur.",
    photo: Person4,
    contacts: {
      phone: "+79117991059",
      whatsapp: "https://wa.me/79117991059",
      telegram: "https://t.me/mini_vika1",
    },
    location: "Санкт-Петербург",
  },
  {
    _id: 5,
    role: "employee",
    name: "Елена Жукова",
    jobTitle: "Специалист по продажам",
    quote:
      "Aliqua deserunt incididunt esse exercitation occaecat cillum esse eiusmod non in nostrud est eu proident.",
    photo: Person5,
    contacts: {
      phone: "+79119489746",
      whatsapp: "https://wa.me/79119489746",
      telegram: "",
    },
    location: "Санкт-Петербург",
  },
  {
    _id: 6,
    role: "employee",
    name: "Игорь Степыгин",
    jobTitle:
`Специалист по оформлению документов
(межевание, постановка на кадастровый учет регистрация прав собственности и т.д.)`,

    quote:
      "Laborum laboris culpa laborum deserunt culpa enim aliquip amet veniam ut.",
    photo: Person2,
    contacts: {
      phone: "+79213778477",
      whatsapp: "https://wa.me/79213778477",
      telegram: "",
    },
    location: "Санкт-Петербург",
  },
  {
    _id: 7,
    role: "employee",
    name: "Анастасия Соколова",
    jobTitle: "Специалист по рекламе",
    quote:
      "Laborum laboris culpa laborum deserunt culpa enim aliquip amet veniam ut.",
    photo: Person4,
    contacts: {
      phone: "",
      whatsapp: "",
      telegram: "",
    },
    location: "Санкт-Петербург",
  },
  {
    _id: 8,
    role: "employee",
    name: "Анастасия Каменева",
    jobTitle: "Специалист по интернет-маркетингу",
    quote:
      "Laborum laboris culpa laborum deserunt culpa enim aliquip amet veniam ut.",
    photo: Person5,
    contacts: {
      phone: "",
      whatsapp: "",
      telegram: "",
    },
    location: "Санкт-Петербург",
  },
];

export default teamMembersData;
