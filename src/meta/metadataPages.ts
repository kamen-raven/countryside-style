/* базовые переменные, использующиеся в тэгах */

import generalContactsData from "~data/constant/generalContacts/generalContactsData";
import formatPhoneNumber from "~helpers/formatters/formatPhoneNumber";

/* URL */
const baseURL = "zagorodst.ru";
/* Изображение */
const baseImg = "../../opengraph-image.png";
/* Заголовок */
const baseTitle = `Агентство недвижимости "Загородный стиль"`;
/* OpenGraph */
const baseOpenGraph = {
  title: baseTitle,
  description:
    "Агентство загородной недвижимости: новые коттеджи, дачи, дома в деревне, земельные участки",
  siteName: baseTitle,
  url: baseURL,
  image: {
    url: baseImg,
    width: 968,
    height: 504,
    alt: baseTitle,
  },
};
/* Общий адрес   "+7 (812) 643-20-40 | Санкт-Петербург, пр. Просвещения, дом 80, к. 1, «Прометей», 3 этаж, офис 3.1", */
const contactDescription = `${formatPhoneNumber(generalContactsData.phone_number)} | ${generalContactsData.address}`;



/* LAYOUT | MAIN PAGE */
const metaLayout = {
  title: baseTitle,
  description:
    "Агентство загородной недвижимости: новые коттеджи, дачи, дома в деревне, земельные участки",
  keywords: `Агентство загородной недвижимости, агентство недвижимости, загородный стиль, агентство "Загородный стиль", новые коттеджи, дачи, дома в деревне, земельные участки, квартиры, коттеджные поселки`,
  /*   viewport: "width=device-width", */
  openGraph: {
    title: baseOpenGraph.title,
    description: baseOpenGraph.description,
    siteName: baseOpenGraph.siteName,
    url: baseOpenGraph.url,
    type: "website",
    images: {
      url: baseOpenGraph.image.url,
      width: baseOpenGraph.image.width,
      height: baseOpenGraph.image.height,
      alt: baseOpenGraph.image.alt,
    },
  },
};

/* КАТАЛОГ ГЛАВНЫЕ СТРАНИЦЫ */
const metaCatalogPage = {
  /* Дома, дачи, коттеджи */
  "houses-and-cottages": {
    category: "Дома, дачи, коттеджи",

    title: /* category + */ baseTitle,
    description:
      "На этой странице представлены дома, дачи, коттеджи, которые сейчас находятся в продаже АН &quot;Загородный стиль&quot;",
    keywords:
      "Загородная недвижимость, ленинградская область, земельные участки, дома под ключ, куплю загородный дом, продажа коттеджей, куплю новый коттедж, коттеджи всеволожский район",
    openGraph: {
      siteName: baseOpenGraph.siteName,
      url: baseOpenGraph.url,
      images: {
        url: baseOpenGraph.image.url,
        width: baseOpenGraph.image.width,
        height: baseOpenGraph.image.height,
        alt: baseOpenGraph.image.alt,
      },
    },
  },

  /* Земельные участки */
  lands: {
    category: "Земельные участки",

    title: /* category + */ baseTitle,
    description:
      "На этой странице представлены земельные участки, которые сейчас находятся в продаже АН &quot;Загородный стиль&quot;",
    keywords:
      "Загородная недвижимость, ленинградская область, земельные участки, дома под ключ, куплю загородный дом, продажа коттеджей, куплю новый коттедж, коттеджи всеволожский район, купить участок в кировском районе",
    openGraph: {
      siteName: baseOpenGraph.siteName,
      url: baseOpenGraph.url,
      images: {
        url: baseOpenGraph.image.url,
        width: baseOpenGraph.image.width,
        height: baseOpenGraph.image.height,
        alt: baseOpenGraph.image.alt,
      },
    },
  },

  /* Квартиры */
  flats: {
    category: "Квартиры",

    title: /* category + */ baseTitle,
    description:
      "На этой странице представлены квартиры, которые сейчас находятся в продаже АН &quot;Загородный стиль&quot;",
    keywords: "",
    openGraph: {
      siteName: baseOpenGraph.siteName,
      url: baseOpenGraph.url,
      images: {
        url: baseOpenGraph.image.url,
        width: baseOpenGraph.image.width,
        height: baseOpenGraph.image.height,
        alt: baseOpenGraph.image.alt,
      },
    },
  },

  /* Коттеджные поселки */
  villages: {
    category: "Коттеджные поселки",

    title: /* category + */ baseTitle,
    description: "Коттеджные поселки",
    keywords:
      "Загородная недвижимость, ленинградская область, земельные участки, дома под ключ, куплю загородный дом, продажа коттеджей, куплю новый коттедж, коттеджи всеволожский район, коттеджные поселки Ленобласти, ",
    openGraph: {
      siteName: baseOpenGraph.siteName,
      url: baseOpenGraph.url,
      images: {
        url: baseOpenGraph.image.url,
        width: baseOpenGraph.image.width,
        height: baseOpenGraph.image.height,
        alt: baseOpenGraph.image.alt,
      },
    },
  },
};

/* О КОМПАНИИ */
const metaAboutUs = {
  title: `О компании | ${baseTitle}`,
  description:
    "Специализированное агентство по загородной недвижимости. Работаем на рынке недвижимости Санкт-Петербурга и Ленинградской области с 2010 года",
  keywords: ``,
  openGraph: {
    title: `О компании | ${baseTitle}`,
    description:
      "Специализированное агентство по загородной недвижимости. Работаем на рынке недвижимости Санкт-Петербурга и Ленинградской области с 2010 года",
    siteName: baseOpenGraph.siteName,
    url: `/about`,
    type: "website",
    images: {
      url: baseOpenGraph.image.url,
      width: baseOpenGraph.image.width,
      height: baseOpenGraph.image.height,
      alt: baseOpenGraph.image.alt,
    },
  },
};

/* КОНТАКТЫ */
const metaContacts = {
  title: `Контакты | ${baseTitle}`,
  description: contactDescription,
  keywords: ``,
  openGraph: {
    title: `Контакты | ${baseTitle}`,
    description: contactDescription,
    siteName: baseOpenGraph.siteName,
    url: `/contacts`,
    type: "website",
    images: {
      url: baseOpenGraph.image.url,
      width: baseOpenGraph.image.width,
      height: baseOpenGraph.image.height,
      alt: baseOpenGraph.image.alt,
    },
  },
};

/* Соглашение об обработке персональных данных */
const metaPersonalAgreement = {
  title: `Политика обработки персональных данных | ${baseTitle}`,
  description: contactDescription,
  keywords: ``,
  openGraph: {
    title: `Политика обработки персональных данных | ${baseTitle}`,
    description: contactDescription,
    siteName: baseOpenGraph.siteName,
    url: `/personal-agreement`,
    type: "website",
    images: {
      url: baseOpenGraph.image.url,
      width: baseOpenGraph.image.width,
      height: baseOpenGraph.image.height,
      alt: baseOpenGraph.image.alt,
    },
  },
};

/* ОТЗЫВЫ */
const metaReviews = {
  title: `Отзывы | ${baseTitle}`,
  description: contactDescription,
  keywords: ``,
  openGraph: {
    title: `Отзывы | ${baseTitle}`,
    description: contactDescription,
    siteName: baseOpenGraph.siteName,
    url: `/reviews`,
    type: "website",
    images: {
      url: baseOpenGraph.image.url,
      width: baseOpenGraph.image.width,
      height: baseOpenGraph.image.height,
      alt: baseOpenGraph.image.alt,
    },
  },
};

/* БЛОГ */
const metaBlog = {
  title: `Блог | ${baseTitle}`,
  description: contactDescription,
  keywords: ``,
  openGraph: {
    title: `Блог | ${baseTitle}`,
    description: contactDescription,
    siteName: baseOpenGraph.siteName,
    url: `/blog`,
    type: "website",
    images: {
      url: baseOpenGraph.image.url,
      width: baseOpenGraph.image.width,
      height: baseOpenGraph.image.height,
      alt: baseOpenGraph.image.alt,
    },
  },
};

/* СТАТЬЯ БЛОГА */
const metaBlogArticle = {
  title: `Блог агентства недвижимости "Загородный стиль"`,
  description: contactDescription,
  keywords: ``,
  openGraph: {
    title: `Блог | ${baseTitle}`,
    description: contactDescription,
    siteName: baseOpenGraph.siteName,
    url: baseOpenGraph.url,
    type: "article",
    images: {
      url: baseOpenGraph.image.url,
      width: baseOpenGraph.image.width,
      height: baseOpenGraph.image.height,
      alt: baseOpenGraph.image.alt,
    },
  },
};

/* СЕРВИСЫ - общая */
const metaServices = {
  title: `Услуги | ${baseTitle}`,
  description: contactDescription,
  keywords: ``,
  openGraph: {
    title: `Услуги | ${baseTitle}`,
    description: contactDescription,
    siteName: baseOpenGraph.siteName,
    url: `/services`,
    type: "website",
    images: {
      url: baseOpenGraph.image.url,
      width: baseOpenGraph.image.width,
      height: baseOpenGraph.image.height,
      alt: baseOpenGraph.image.alt,
    },
  },
};


/* СЕРВИСЫ - общая */
const metaServicesForBuyers = {
  title: `Покупателям | ${baseTitle}`,
  description: 'Решили купить загородную недвижимость? Звоните – поможем!',
  keywords: ``,
  openGraph: {
    title: `Покупателям | ${baseTitle}`,
    description: 'Решили купить загородную недвижимость? Звоните – поможем!',
    siteName: baseOpenGraph.siteName,
    url: `/services/for-buyers`,
    type: "website",
    images: {
      url: baseOpenGraph.image.url,
      width: baseOpenGraph.image.width,
      height: baseOpenGraph.image.height,
      alt: baseOpenGraph.image.alt,
    },
  },
};

const metaServicesForSellers = {
  title: `Продавцам | ${baseTitle}`,
  description: 'Поможем продать вашу загородную недвижимость в короткий срок по максимальной цене',
  keywords: ``,
  openGraph: {
    title: `Продавцам | ${baseTitle}`,
    description: 'Поможем продать вашу загородную недвижимость в короткий срок по максимальной цене',
    siteName: baseOpenGraph.siteName,
    url: `/services/for-sellers`,
    type: "website",
    images: {
      url: baseOpenGraph.image.url,
      width: baseOpenGraph.image.width,
      height: baseOpenGraph.image.height,
      alt: baseOpenGraph.image.alt,
    },
  },
};

const metaServicesForCottageVillages = {
  title: `Отдел продаж «под ключ» | ${baseTitle}`,
  description: 'Требуется помощь в оптимизации процесса продаж существующего коттеджного поселка или организации продаж поселка «с нуля»? Звоните – поможем!',
  keywords: ``,
  openGraph: {
    title: `Отдел продаж «под ключ» | ${baseTitle}`,
    description: 'Требуется помощь в оптимизации процесса продаж существующего коттеджного поселка или организации продаж поселка «с нуля»? Звоните – поможем!',
    siteName: baseOpenGraph.siteName,
    url: `/services/for-cottage-villages`,
    type: "website",
    images: {
      url: baseOpenGraph.image.url,
      width: baseOpenGraph.image.width,
      height: baseOpenGraph.image.height,
      alt: baseOpenGraph.image.alt,
    },
  },
};

const metaServicesForDevelopers = {
  title: `Строительным бригадам и частным застройщикам | ${baseTitle}`,
  description: 'Уже построили дом на продажу или только планируете? Звоните – поможем!',
  keywords: ``,
  openGraph: {
    title: `Строительным бригадам и частным застройщикам | ${baseTitle}`,
    description: 'Уже построили дом на продажу или только планируете? Звоните – поможем!Требуется помощь в оптимизации процесса продаж существующего коттеджного поселка или организации продаж поселка «с нуля»? Звоните – поможем!',
    siteName: baseOpenGraph.siteName,
    url: `/services/for-developers`,
    type: "website",
    images: {
      url: baseOpenGraph.image.url,
      width: baseOpenGraph.image.width,
      height: baseOpenGraph.image.height,
      alt: baseOpenGraph.image.alt,
    },
  },
};

const metaServicesLegalSupport = {
  title: `Юридическое сопровождение и консультирование | ${baseTitle}`,
  description: 'Нужна консультация опытного специалиста по недвижимости? Звоните - поможем!',
  keywords: ``,
  openGraph: {
    title: `Юридическое сопровождение и консультирование | ${baseTitle}`,
    description: 'Нужна консультация опытного специалиста по недвижимости? Звоните - поможем!',
    siteName: baseOpenGraph.siteName,
    url: `/services/for-developers`,
    type: "website",
    images: {
      url: baseOpenGraph.image.url,
      width: baseOpenGraph.image.width,
      height: baseOpenGraph.image.height,
      alt: baseOpenGraph.image.alt,
    },
  },
};


export {
  metaLayout,
  metaCatalogPage,
  metaAboutUs,
  metaContacts,
  metaPersonalAgreement,
  metaReviews,
  metaBlog,
  metaBlogArticle,
  metaServices,
  metaServicesForSellers,
  metaServicesForBuyers,
  metaServicesForCottageVillages,
  metaServicesForDevelopers,
  metaServicesLegalSupport
};
