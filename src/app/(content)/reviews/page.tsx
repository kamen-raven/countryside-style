import { Metadata } from "next";
import { ReviewsPage } from "~pages/index";

// data
import { getAllReviews } from "~api/Reviews/getReviews";
import { getAllUsers } from "~api/Users/getUsers";
import sortUsersList from "~helpers/users/sortUsersData";
import sortReviewsByDate from "~helpers/reviews/sortReviewsByDate";
import { metaReviews } from "~meta/metadataPages";

export const metadata: Metadata = {
  title: metaReviews.title,
  description: metaReviews.description,
  keywords: metaReviews.keywords,
  openGraph: {
    title: metaReviews.title,
    description: metaReviews.description,
    siteName: metaReviews.openGraph.siteName,
    type: 'website',
    url: metaReviews.openGraph.url,
    images: [
      {
        url: '../../opengraph-image.png',
        width:  metaReviews.openGraph.images.width,
        height:  metaReviews.openGraph.images.height,
        alt:  metaReviews.openGraph.images.alt,
      },
    ],
  },
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
