import React from 'react';
import styles from './HomePage.module.scss';
import {
  BlogBlock,
  HeadBlock,
  ObjectsForSaleBlock,
  OurServicesBlock,
  PressBlock,
  TeamBlock,
  ReviewsBlock,
  ContactsBlock
} from '~widgets/index';

import objectsForSaleData from "~utils/temp/objectsForSaleData/objectsForSaleItems";
import servicesData from "~utils/temp/OurServicesData/servicesItems";
import pressData from '~utils/constants/pressBlock/pressArticlesItems';
import teamMembersData from '~data/EmployeesList/teamMembersData';
import reviews from '~utils/temp/reviewsData/reviewsData';
import GeneralContactsData from '~data/GeneralContacts/GeneralContactsData';


const HomePage = ({ ...props }): JSX.Element => {

  const objectsForSaleItems = objectsForSaleData;
  const ourServicesItems = servicesData;
  const pressInfoItems = pressData;

  return (
    <main className={styles.mainContainer} {...props} >
      <HeadBlock />
      <ObjectsForSaleBlock objItems={objectsForSaleItems} />
      <OurServicesBlock servicesItems={ourServicesItems} />
      <PressBlock pressItems={pressInfoItems} />
      <BlogBlock path={'home'} />
      <TeamBlock teamMembersItems={teamMembersData} />
      <ReviewsBlock reviewsDataItem={reviews} />
      <ContactsBlock generalContactsData={GeneralContactsData} />
    </main>
  );
};

export { HomePage };
