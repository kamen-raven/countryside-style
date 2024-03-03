import { Metadata } from "next";
import { ReviewsPage } from "~pages/index";

// data
import { getAllReviews } from "~api/Reviews/getReviews";
import { getAllUsers } from "~api/Users/getUsers";
import sortUsersList from "~helpers/users/sortUsersData";

export const metadata: Metadata = {
  title: 'Отзывы | Загородный стиль',
  description: 'Отзывы о нашей работе',
};





export default async function PageReviews() {
 const reviews = (await getAllReviews(10)).results; // запрос ОТЗЫВОВ
 const employeeInitialData = await getAllUsers(10); // берем 10 пользователей
 const employeeData = sortUsersList(employeeInitialData); // сортируем приходящий массив пользователей



  return (
    <ReviewsPage
      employeesData={employeeData}
      reviewsData={reviews}
      />
  );
}
