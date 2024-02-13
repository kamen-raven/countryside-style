import { Metadata } from "next";
import { ReviewsPage } from "~pages/index";

// data
import { getAllReviews } from "~api/Reviews/getReviews";
import teamMembersData from "~data/temp/employeesList/teamMembersData";

export const metadata: Metadata = {
  title: 'Отзывы | Загородный стиль',
  description: 'Отзывы о нашей работе',
};





export default async function PageForSellers() {
 const reviews = await getAllReviews(); // запрос ОТЗЫВОВ



  return (
    <ReviewsPage
      employeesData={teamMembersData}
      reviewsData={reviews}
      />
  );
}
