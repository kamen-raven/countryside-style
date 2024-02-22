import { Metadata } from "next";
import { ForBuyersPage } from "~pages/index";

// temp

// data
import { typePageEnum } from "~data/constant/servicesBlock/servicesPagesFor/typePageEnum";
import titleBlockData from "~data/constant/servicesBlock/servicesPagesFor/titleBlockData/titleBlockData";
import forBuyersPageAdvantages from "~data/constant/servicesBlock/advantagesList/forBuyersPage/forBuyersPageAdvantages";
import { getAllReviews } from "~api/Reviews/getReviews";

export const metadata: Metadata = {
  title: 'Услуги | Покупателям',
  description: 'Вы собирайтесь купить недвижимость? Поможем с выбором и сопроводим сделку',
};





export default async function PageForBuyers() {
  const reviews = (await getAllReviews()).results; // запрос ОТЗЫВОВ


  return (
    <ForBuyersPage
      typePage={typePageEnum.buyers}
      titleBlockData={titleBlockData}
      advantagesListData={forBuyersPageAdvantages}
      reviewsData={reviews}
      />
  );
}
