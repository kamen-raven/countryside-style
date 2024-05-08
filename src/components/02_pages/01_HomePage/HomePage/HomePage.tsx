import React from 'react';
import styles from './HomePage.module.scss';
import { HomePageInterface } from './HomePage.interface';
import {
  BlogBlock,
  ContactsMainBlock,
  HeadBlock,
  ObjectsForSaleBlock,
  OurServicesBlock,
  PressBlock,
} from '~pages/01_HomePage/HomePage/blocks/index';
import { ReviewsBlock, TeamMembersBlock } from '~common/index';

import pressData from '~data/constant/pressBlock/pressArticlesItems';
import generalContactsData from '~data/constant/generalContacts/generalContactsData';
import homePageServicesItems from '~data/constant/servicesBlock/homePage/homePageServicesItems';


const HomePage: React.FC<HomePageInterface> = ({
  mainPageObjectsData, // объекты на главной
  mainPageVillagesData, // объекты коттеджных поселков на главной
  reviewsData, // отзывы
  employeesData, // сотрудники
  blogPostsData, // блог
}) => {

/*   const objectsForSaleItems = objectsForSaleData; */
  const ourServicesItems = homePageServicesItems;  // наши услуги (services)
  const pressInfoItems = pressData;  // информация о публикациях в прессе
  const generalContacts = generalContactsData; // общие контактные данные компании

  return (
    <main className={styles.mainContainer}>
      <HeadBlock />
      <ObjectsForSaleBlock objectsData={mainPageObjectsData} villagesData={mainPageVillagesData} />
      <OurServicesBlock servicesItems={ourServicesItems} />
      <PressBlock pressItems={pressInfoItems} />
      <BlogBlock path={'home'} blogPostsData={blogPostsData} />
      <TeamMembersBlock employeesData={employeesData} countUsers={'owner'} />
      <ReviewsBlock reviewsDataItem={reviewsData} />
      <ContactsMainBlock generalContactsData={generalContacts} />
    </main>
  );
};

export { HomePage };
