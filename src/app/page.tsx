import { getAllReviews } from '~api/Reviews/getReviews';
import { getAllUsers } from '~api/Users/getUsers';
import sortUsersList from '~helpers/sortUsersData';
import { HomePage } from '~pages/01_HomePage/HomePage/HomePage';

export default async function Home() {
  const employeeInitialData = await getAllUsers(10); // берем 10 пользователей
  const employeeData = sortUsersList(employeeInitialData); // сортируем приходящий массив пользователей

  const reviews = (await getAllReviews()).results; // запрос ОТЗЫВОВ

  return (
    <HomePage reviewsData={reviews} employeesData={employeeData} />
  );
}
