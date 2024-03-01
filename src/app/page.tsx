import { getBlogArticle } from '~api/Blog/getBlogArticle';
import { getAllReviews } from '~api/Reviews/getReviews';
import { getAllUsers } from '~api/Users/getUsers';
import sortUsersList from '~helpers/sortUsersData';
import { HomePage } from '~pages/01_HomePage/HomePage/HomePage';

export default async function Home() {
  const employeeInitialData = await getAllUsers(10); // берем 10 пользователей
  const employeeData = sortUsersList(employeeInitialData); // сортируем приходящий массив пользователей

  const reviews = (await getAllReviews()).results; // запрос ОТЗЫВОВ
  const blogPostsData = await getBlogArticle(1); // посты из блога - //! 1 статья

  return (
    <HomePage
    reviewsData={reviews}
    employeesData={employeeData}
    blogPostsData={blogPostsData} />
  );
}
