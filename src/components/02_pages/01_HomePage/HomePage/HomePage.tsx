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

import objectsForSaleData from "~utils/temp/objectsForSaleData/objectsForSaleItems";
import servicesData from "~utils/temp/OurServicesData/servicesItems";
import pressData from '~data/constant/pressBlock/pressArticlesItems';
import teamMembersData from '~data/temp/employeesList/teamMembersData';

import generalContactsData from '~data/constant/generalContacts/generalContactsData';


const HomePage: React.FC<HomePageInterface> = ({ reviewsData, employeesData }) => {

  const objectsForSaleItems = objectsForSaleData;
  const ourServicesItems = servicesData;
  const pressInfoItems = pressData;

  return (
    <main className={styles.mainContainer}>
      <HeadBlock />
      <ObjectsForSaleBlock objItems={objectsForSaleItems} />
      <OurServicesBlock servicesItems={ourServicesItems} />
      <PressBlock pressItems={pressInfoItems} />
      <BlogBlock path={'home'} />
      <TeamMembersBlock employeesData={teamMembersData} teamRole={'owner'} />
      <ReviewsBlock reviewsDataItem={reviewsData} />
      <ContactsMainBlock generalContactsData={generalContactsData} />
    </main>
  );
};

export { HomePage };
