/* базовые переменные, использующиеся в тэгах */

/* URL */
const baseURL = "countryside-style.vercel.app";
/* Изображение */
const baseImg = '../../public/img/meta/opengraph-image.png';
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

export { metaLayout, metaCatalogPage };
