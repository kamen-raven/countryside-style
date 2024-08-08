import React from 'react';
import styles from './CatalogPage.module.scss';
import { CatalogPageInterface } from './CatalogPage.interface.ts';

import { ReviewsBlock } from '~common/index.ts';

import { ContactUsBlock } from "~pages/02_CatalogPages/CatalogPage/blocks/ContactUsBlock/ContactUsBlock.tsx";




import { InfoTypeDescriptionBlock, CatalogBlock, TitleBlock } from './blocks/index.ts';
import { SearchBarObjects } from '~features/index.ts';

const CatalogPage: React.FC<CatalogPageInterface> = ({ generalContactsData, objectsData, villagesData, reviewsData, typePage }) => {

  /*   const itemsPerPage = objectsData?.length + 1;  //! количество объектов на странице //*пока не отображаем
   */


  return (
    <main className={styles.mainContainer}>
      <TitleBlock typePage={typePage} />
        <SearchBarObjects typePage={typePage} /* objectsData={objectsData} villagesData={villagesData} */ />
      <CatalogBlock typePage={typePage} objectsData={objectsData} villagesData={villagesData} /* itemsPerPage={itemsPerPage} */ />
      <InfoTypeDescriptionBlock typePage={typePage} />
      <ContactUsBlock generalContactsData={generalContactsData} />
      <ReviewsBlock reviewsDataItem={reviewsData} />
    </main>
  );
};

export { CatalogPage };
