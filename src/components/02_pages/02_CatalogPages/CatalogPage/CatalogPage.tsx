import React from 'react';
import styles from './CatalogPage.module.scss';
import { CatalogPageInterface } from './CatalogPage.interface.ts';

import { ReviewsBlock } from '~common/index.ts';

import { ContactUsBlock } from "~pages/02_CatalogPages/CatalogPage/blocks/ContactUsBlock/ContactUsBlock.tsx";



import housesSEOText from '~utils/constants/TypeSEOText/TypeSEOText.ts';
import { InfoTypeDescriptionBlock, SearchBarBlock, CatalogBlock } from './blocks/index.ts';

const CatalogPage: React.FC<CatalogPageInterface> = ({ generalContactsData, objectsData, reviewsData }) => {

  const SEOTextData = housesSEOText;


  return (
    <main className={styles.mainContainer}>
      <InfoTypeDescriptionBlock data={SEOTextData} />
      <SearchBarBlock />
      <CatalogBlock objectsData={objectsData} />
      <ContactUsBlock generalContactsData={generalContactsData} />
      <ReviewsBlock reviewsDataItem={reviewsData} />
    </main>
  );
};

export { CatalogPage };
