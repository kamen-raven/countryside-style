import { Metadata } from "next";
import { ReviewsPage } from "~pages/index";

// data
import { getAllReviews } from "~api/Reviews/getReviews";
import { getAllUsers } from "~api/Users/getUsers";
import sortUsersList from "~helpers/users/sortUsersData";
import sortReviewsByDate from "~helpers/reviews/sortReviewsByDate";

export const metadata: Metadata = {
  title: 'Отзывы | Загородный стиль',
  description: 'Отзывы о нашей работе',
};





export default async function PageReviews() {
  const reviews = (await getAllReviews(300)).results; // запрос ОТЗЫВОВ
  const sortedReviews = sortReviewsByDate(reviews);

  const employeeInitialData = await getAllUsers(10); // берем 10 пользователей
  const employeeData = sortUsersList(employeeInitialData); // сортируем приходящий массив пользователей



  return (
    <ReviewsPage
      employeesData={employeeData}
      reviewsData={sortedReviews}
    />
  );
}
