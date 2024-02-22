import { Metadata } from "next";
import { ReviewsPage } from "~pages/index";

// data
import { getAllReviews } from "~api/Reviews/getReviews";
import { getAllUsers } from "~api/Users/getUsers";
import sortUsersList from "~helpers/sortUsersData";

export const metadata: Metadata = {
  title: 'Отзывы | Загородный стиль',
  description: 'Отзывы о нашей работе',
};





export default async function PageForSellers() {
 const reviews = (await getAllReviews()).results; // запрос ОТЗЫВОВ
 const employeeInitialData = await getAllUsers(10); // берем 10 пользователей
 const employeeData = sortUsersList(employeeInitialData); // сортируем приходящий массив пользователей



  return (
    <ReviewsPage
      employeesData={employeeData}
      reviewsData={reviews}
      />
  );
}
