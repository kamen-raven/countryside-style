import { getBlogArticle } from '~api/Blog/getBlogArticle';
import { getObjects } from '~api/Objects/getObjects';
import { getAllReviews } from '~api/Reviews/getReviews';
import { getAllUsers } from '~api/Users/getUsers';
import { getAllVillages } from '~api/Villages/getAllVillages';
import filteredObjectsByCategory from '~helpers/objects/filteredObjectsByCategory';
import filteredVillagesByVisible from '~helpers/objects/filteredVillagesByVisible';
import sortReviewsByDate from '~helpers/reviews/sortReviewsByDate';
import sortUsersList from '~helpers/users/sortUsersData';

import { HomePage } from '~pages/01_HomePage/HomePage/HomePage';






export default async function Home() {
  const objectsType = await getObjects(); // получаем все объекты
  const mainPageObjects = filteredObjectsByCategory(objectsType, 'Главная'); // вызываем функцию сортировки и потом передаем это в пропсы в страницу

  const villagesObjects = await getAllVillages();
  const visibleVillages = filteredVillagesByVisible(villagesObjects);

  const employeeInitialData = await getAllUsers(20); // берем 20 пользователей
  const employeeData = sortUsersList(employeeInitialData); // сортируем приходящий массив пользователей

  const allReviews = sortReviewsByDate((await getAllReviews())); // запрос ОТЗЫВОВ
  const reviews = allReviews.slice(0, 8);

  const blogPostsData = await getBlogArticle(300); // посты из блога

  return (
    <HomePage
      mainPageObjectsData={mainPageObjects}
      mainPageVillagesData={visibleVillages}
      reviewsData={reviews}
      employeesData={employeeData}
      blogPostsData={blogPostsData} />
  );
}
