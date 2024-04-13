import React from 'react';
import styles from './CatalogPage.module.scss';
import { CatalogPageInterface } from './CatalogPage.interface.ts';

import { ReviewsBlock } from '~common/index.ts';

import { ContactUsBlock } from "~pages/02_CatalogPages/CatalogPage/blocks/ContactUsBlock/ContactUsBlock.tsx";




import { InfoTypeDescriptionBlock, SearchBarBlock, CatalogBlock, TitleBlock } from './blocks/index.ts';

const CatalogPage: React.FC<CatalogPageInterface> = ({ generalContactsData, objectsData, villagesData, reviewsData, typePage }) => {




  return (
    <main className={styles.mainContainer}>
      <TitleBlock typePage={typePage} />
      <SearchBarBlock />
      <CatalogBlock typePage={typePage} objectsData={objectsData} villagesData={villagesData} />
      <InfoTypeDescriptionBlock typePage={typePage} />
      <ContactUsBlock generalContactsData={generalContactsData} />
      {/*       <ReviewsBlock reviewsDataItem={reviewsData} /> */}
    </main>
  );
};

export { CatalogPage };
