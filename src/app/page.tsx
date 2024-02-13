import { getAllReviews } from '~api/Reviews/getReviews';
import { HomePage } from '~pages/01_HomePage/HomePage/HomePage';

export default async function Home() {
  const reviews = await getAllReviews(); // запрос ОТЗЫВОВ




  return (
    <HomePage reviewsData={reviews} />
  );
}
